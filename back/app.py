import os
from dotenv import load_dotenv
from flask import Flask, jsonify, send_from_directory
from flask_mysqldb import MySQL
from flask_cors import CORS

load_dotenv()

print("Démarrage de l'application Flask...")

app = Flask(__name__)
CORS(app)

# Configuration de la base de données MySQL
app.config['MYSQL_HOST'] = os.getenv("MYSQL_HOST")
app.config['MYSQL_USER'] = os.getenv("MYSQL_USER")
app.config['MYSQL_PASSWORD'] = os.getenv("MYSQL_PASSWORD")
app.config['MYSQL_DB'] = os.getenv("MYSQL_DB")
mysql = MySQL(app)

print("App Flask créée...")

@app.route('/')
def home():
    return "Bienvenue à mon API Flask!"

# static /images folder
@app.route('/images/<path:filename>')
def send_images(filename):
    return send_from_directory('images', filename)

# lire la table Country
@app.route('/countries', methods=['GET'])
def get_countries():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM country')
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
        cur.execute('SELECT * FROM athlete')
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

# lire la table Game
@app.route('/games', methods=['GET'])
def get_games():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM game')
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
        query = """
            SELECT p.id, g.name AS game_name, a.full_name AS athlete_name, c.name AS country_name, 
                   p.total, p.gold, p.silver, p.bronze
                    FROM participation p
                    JOIN game g ON p.game_id = g.id
                    JOIN athlete a ON p.athlete_id = a.id
                    JOIN country c ON p.country_id = c.id
                    GROUP by p.id;
        """
        cur.execute(query)
        data = cur.fetchall()
        cur.close()

        result = []
        for row in data:
            result.append({
                'id': row[0],
                'game_name': row[1],
                'athlete_name': row[2],
                'country_name': row[3],
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