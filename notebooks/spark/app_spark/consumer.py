#!/usr/bin/env python3

from pyspark.sql import SparkSession
from pyspark.sql.functions import expr
import re

# Creer la session Spark
spark = SparkSession.builder.appName("spark").getOrCreate()

# Mute les logs inferieur au niveau Warning
spark.sparkContext.setLogLevel("WARN")

# Recuperation des donnees dans le dossier data
data_athletes_path = 'data/olympic_athletes.json'
data_hosts_path = 'data/olympic_hosts.xml'
data_medals_path = 'data/olympic_medals.xlsx'
data_results_path = 'data/olympic_results.html'

df_medals = spark.read.csv(data_medals_path, header=True, inferSchema=True)
df_athletes = spark.read.json(data_athletes_path)
df_results = spark.read.format("csv").option("header", "true").option("inferSchema", "true").load(data_results_path)
df_hosts = spark.read.format("xml").option("rowTag", "host").load(data_hosts_path)

# Fusionner les DataFrames en utilisant la colonne 'year' du premier DataFrame et la colonne 'game_year' du deuxième DataFrame comme clés de fusion
df = df_medals.join(df_hosts, df_medals.year == df_hosts.game_year)

# Fusionner les DataFrames en utilisant la colonne 'athlete_url' du premier DataFrame et la colonne 'athlete_url' du deuxième DataFrame comme clés de fusion
df = df.join(df_athletes, df_athletes.athlete_url == df_medals.athlete_url)


def extract_medals_all(athletes_medals_str) -> int:
    if (athletes_medals_str == None):
        return 0
    athletes_medals_str = athletes_medals_str.replace('\n', '')
    gold = re.findall(r'(\d)G', athletes_medals_str)
    silver = re.findall(r'(\d)S', athletes_medals_str)
    bronze = re.findall(r'(\d)B', athletes_medals_str)

    gold = int(gold[0]) if len(gold) > 0 else 0
    silver = int(silver[0]) if len(silver) > 0 else 0
    bronze = int(bronze[0]) if len(bronze) > 0 else 0
    total = gold + silver + bronze

    return total

def extract_medals_gold(athletes_medals_str) -> int:
    if (athletes_medals_str == None):
        return 0
    athletes_medals_str = athletes_medals_str.replace('\n', '')
    gold = re.findall(r'(\d)G', athletes_medals_str)
    gold = int(gold[0]) if len(gold) > 0 else 0

    return gold

def extract_medals_silver(athletes_medals_str) -> int:
    if (athletes_medals_str == None):
        return 0
    athletes_medals_str = athletes_medals_str.replace('\n', '')
    silver = re.findall(r'(\d)S', athletes_medals_str)
    silver = int(silver[0]) if len(silver) > 0 else 0

    return silver

def extract_medals_bronze(athletes_medals_str) -> int:
    if (athletes_medals_str == None):
        return 0
    athletes_medals_str = athletes_medals_str.replace('\n', '')
    bronze = re.findall(r'(\d)B', athletes_medals_str)
    bronze = int(bronze[0]) if len(bronze) > 0 else 0

    return bronze

# Ajouter les colonnes 'total', 'gold', 'silver' et 'bronze' au DataFrame
df = df.withColumn('total', expr("extract_medals_all(athletes_medals)"))
df = df.withColumn('gold', expr("extract_medals_gold(athletes_medals)"))
df = df.withColumn('silver', expr("extract_medals_silver(athletes_medals)"))
df = df.withColumn('bronze', expr("extract_medals_bronze(athletes_medals)"))


# remove 'athlete_medals' column, 'bio' column, country_code, country_3_letter_code, 'participant_title', 'medal_type', slug_game, first column (Unnamed: 0), 'athlete_url', 'athlete_full_name_y'
df = df.drop('athletes_medals', 'bio', 'country_code', 'country_3_letter_code', 'participant_title', 'medal_type', 'slug_game', 'Unnamed: 0', 'athlete_url', 'athlete_full_name_y')

# rename 'athlete_full_name_x' to 'athlete_full_name'
df = df.withColumnRenamed('athlete_full_name_x', 'athlete_full_name')

# Diviser la valeur 'first_game' en deux colonnes distinctes pour la ville et l'année
df = df.withColumn('city_location', expr("split(first_game, ' ')[0]"))

# remove 'year','game_slug','year1' , 'first_game', 'game_name', 'index'
df = df.drop('game_slug', 'first_game', 'game_name', 'index')


# Afficher le DataFrame
df.show()