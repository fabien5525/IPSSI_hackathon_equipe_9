
print("Démarrage de l'application Flask...")
from flask import Flask, jsonify, request
from flask_mysqldb import MySQL

app = Flask(__name__)

# Configuration de la base de données MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'hackathon'
mysql = MySQL(app)

print("App Flask créée...")

@app.route('/')
def home():
    return "Bienvenue à mon API Flask!"

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

@app.route('/countries/<int:id>', methods=['GET'])
def get_country_by_id(id):
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM Country WHERE id = %s', (id,))
        data = cur.fetchone()
        cur.close()

        if data:
            result = {
                'id': data[0],
                'name': data[1]
            }
            return jsonify(result)
        else:
            return jsonify({"error": "Country not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/countries', methods=['POST'])
def add_country():
    try:
        data = request.get_json()
        name = data.get('name')

        cur = mysql.connection.cursor()
        cur.execute('INSERT INTO Country (name) VALUES (%s)', (name,))
        mysql.connection.commit()
        cur.close()

        return jsonify({"message": "Country added successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/countries/<int:id>', methods=['PUT'])
def update_country(id):
    try:
        data = request.get_json()
        name = data.get('name')

        cur = mysql.connection.cursor()
        cur.execute('UPDATE Country SET name = %s WHERE id = %s', (name, id))
        mysql.connection.commit()
        cur.close()

        return jsonify({"message": "Country updated successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/countries/<int:id>', methods=['DELETE'])
def delete_country(id):
    try:
        cur = mysql.connection.cursor()
        cur.execute('DELETE FROM Country WHERE id = %s', (id,))
        mysql.connection.commit()
        cur.close()

        return jsonify({"message": "Country deleted successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    print("Lancement de l'application...")
    app.run(debug=True)

