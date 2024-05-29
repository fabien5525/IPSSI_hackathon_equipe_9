#!/usr/bin/env python3

from pyspark.sql import SparkSession
from pyspark.sql.functions import expr

# Creer la session Spark
spark = SparkSession.builder.appName("spark").getOrCreate()

# Mute les logs inferieur au niveau Warning
spark.sparkContext.setLogLevel("WARN")

# Recuperation des donnees dans le dossier data
data_medals_path = 'data/olympic_medals.xlsx'
data_athletes_path = 'data/olympic_athletes.json'

df_medals = spark.read.csv(data_medals_path, header=True, inferSchema=True)
df_athletes = spark.read.json(data_athletes_path)


