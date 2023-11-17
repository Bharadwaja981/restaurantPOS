from flask import Flask, jsonify
import psycopg2
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# PostgreSQL connection configuration
DB_NAME = 'nrkilvur'
DB_USER = 'nrkilvur'
DB_PASSWORD = 'DfsSnk3NDnP7GfXtCbiXoxYZ8f1Fh64g'
DB_HOST = 'flora.db.elephantsql.com'
DB_PORT = '5432'

# Establish a connection to the PostgreSQL database
def create_connection():
    conn = psycopg2.connect(
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT
    )
    return conn

# Route to retrieve data from the database
@app.route('/get_Table_limit', methods=['GET'])
def get_Table_limit():
    try:
        conn = create_connection()
        cur = conn.cursor()
        cur.execute('SELECT \"NumberOfTables\" FROM Tables')
        data = cur.fetchall()
        conn.close()
        print(data[0][0])
        return jsonify({'data': data[0][0]})
    except psycopg2.Error as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
