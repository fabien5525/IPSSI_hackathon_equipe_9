#!/usr/bin/env python3

import re
from pyspark.sql import SparkSession
from pyspark.sql.functions import expr, col, split, mean as _mean, when, udf
from pyspark.sql.types import IntegerType, ArrayType

# Create Spark session
spark = SparkSession.builder \
    .appName("spark") \
    .getOrCreate()

# Paths to data files
data_medals_path = 'data/olympic_medals.xlsx'
data_athletes_path = 'data/olympic_athletes.json'
data_hosts_path = 'data/olympic_hosts.xml'

# Read data files
df_medals = spark.read.format("com.crealytics.spark.excel").option("header", "true").load(data_medals_path)
df_athletes = spark.read.json(data_athletes_path)
df_hosts = spark.read.format("xml").option("rowTag", "yourRowTag").load(data_hosts_path)  # replace yourRowTag with the appropriate row tag in your XML

# Join the two DataFrames on 'athlete_url'
df = df_medals.join(df_athletes, on='athlete_url')

# Function to extract medals
def extract_medals(athletes_medals_str):
    if athletes_medals_str is None:
        return (0, 0, 0)
    gold = re.findall(r'(\d)G', athletes_medals_str)
    silver = re.findall(r'(\d)S', athletes_medals_str)
    bronze = re.findall(r'(\d)B', athletes_medals_str)
    return (int(gold[0]) if gold else 0, int(silver[0]) if silver else 0, int(bronze[0]) if bronze else 0)

# Create a UDF to use the extract_medals function
extract_medals_udf = udf(lambda x: extract_medals(x), ArrayType(IntegerType()))

# Apply the UDF and create nb_gold, nb_silver, nb_bronze columns
df = df.withColumn("medal_counts", extract_medals_udf(col("athlete_medals")))
df = df.withColumn("nb_gold", col("medal_counts").getItem(0)) \
       .withColumn("nb_silver", col("medal_counts").getItem(1)) \
       .withColumn("nb_bronze", col("medal_counts").getItem(2)) \
       .drop("medal_counts")

# Remove rows where 'first_game' is None
df = df.filter(df['first_game'].isNotNull())

# Extract the year from 'first_game'
df = df.withColumn('year', split(col('first_game'), ' ').getItem(-1).cast(IntegerType()))

# Drop unnecessary columns
columns_to_drop = ['athlete_medals', 'bio', 'country_code', 'country_3_letter_code',
                   'participant_title', 'medal_type', 'slug_game', 'Unnamed: 0',
                   'athlete_url', 'athlete_full_name_y']
df = df.drop(*columns_to_drop)

# Rename 'athlete_full_name_x' to 'athlete_full_name'
df = df.withColumnRenamed('athlete_full_name_x', 'athlete_full_name')

# Calculate the mean of 'athlete_year_birth' and replace null values with this mean
mean_birth_year = df.select(_mean(col('athlete_year_birth')).alias('mean')).collect()[0]['mean']
df = df.withColumn('athlete_year_birth', when(col('athlete_year_birth').isNull(), mean_birth_year).otherwise(col('athlete_year_birth')).cast(IntegerType()))

# Add a 'Medals' column as the sum of nb_gold, nb_silver, and nb_bronze
df = df.withColumn('Medals', col('nb_gold') + col('nb_silver') + col('nb_bronze'))

# Replace country names
replacement_dict = {
    'United States of America': 'USA',
    'Soviet Union': 'Russia',
    'German Democratic Republic (Germany)': 'Germany',
    'People\'s Republic of China': 'China',
    'Russian Federation': 'Russia',
    'Federal Republic of Germany': 'Germany',
    'Republic of Korea': 'South Korea',
    'ROC': 'Russia',  # ROC refers to the Russian Olympic Committee
}

# Escape single quotes in keys and values
replacement_dict = {k.replace("'", "\\'"): v.replace("'", "\\'") for k, v in replacement_dict.items()}

# Create a column with replacements
replacement_expr = 'CASE ' + ' '.join([f"WHEN country_name = '{key}' THEN '{value}'" for key, value in replacement_dict.items()]) + ' ELSE country_name END'
df = df.withColumn('country_name', expr(replacement_expr))

# Show the final DataFrame
df.show()

# Save the final DataFrame to an Excel file
df.coalesce(1).write.format("com.crealytics.spark.excel").option("header", "true").save("data/olympic_final.xlsx")
