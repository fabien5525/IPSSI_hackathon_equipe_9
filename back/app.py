
import os
from dotenv import load_dotenv
load_dotenv()


print("Démarrage de l'application Flask...")
from flask import Flask, jsonify, request
from flask_mysqldb import MySQL

app = Flask(__name__)

# Configuration de la base de données MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = os.getenv("MYSQL_USER")
app.config['MYSQL_PASSWORD'] = os.getenv("MYSQL_PASSWORD")
app.config['MYSQL_DB'] = 'hackathon'
mysql = MySQL(app)

print("App Flask créée...")

@app.route('/')
def home():
    return "Bienvenue à mon API Flask!"

# lire la table Country
@app.route('/countries', methods=['GET'])
def get_countries():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM Country')
        data = cur.fetchall()
        cur.close()

        result = []
        for row in data:
            result.append({
                'id': row[0],
                'name': row[1]
            })

        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# lire  la table Athlete
@app.route('/athletes', methods=['GET'])
def get_athletes():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM Athlete')
        data = cur.fetchall()
        cur.close()

        result = []
        for row in data:
            result.append({
                'id': row[0],
                'full_name': row[1],
                'birth': row[2]
            })

        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

#lire la table Game
@app.route('/games', methods=['GET'])
def get_games():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM Game')
        data = cur.fetchall()
        cur.close()

        result = []
        for row in data:
            result.append({
                'id': row[0],
                'name': row[1],
                'year': row[2]
            })

        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# lire la table Participation
@app.route('/participations', methods=['GET'])
def get_participations():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM Participation')
        data = cur.fetchall()
        cur.close()

        result = []
        for row in data:
            result.append({
                'id': row[0],
                'game_id': row[1],
                'athlete_id': row[2],
                'country_id': row[3],
                'total': row[4],
                'gold': row[5],
                'silver': row[6],
                'bronze': row[7]
            })

        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    print("Lancement de l'application...")
    app.run(debug=True)

