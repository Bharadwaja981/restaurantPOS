from flask import Flask, jsonify, request
import psycopg2
from flask_cors import CORS
from psycopg2 import sql
from datetime import datetime


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

@app.route('/get_orders_for_day', methods=['GET'])
def get_orders_for_today():
    conn = create_connection()
    cursor = conn.cursor()

    today = datetime.now().date()

    query = """
        SELECT * FROM public.orders
        WHERE "OrderDate"::date = %s
    """

    cursor.execute(query, (today,))
    orders = cursor.fetchall()

    cursor.close()
    conn.close()

    # Convert orders to a list of dictionaries for JSON serialization
    orders_list = []
    for order in orders:
        order_dict = {
            "OrderID": order[0],
            "CustomerName": order[1],
            "OrderType": order[2],
            "TableNumber": order[3],
            "OrderDate": order[4].isoformat(),
            "Price": order[5],
            "PaymentType": order[6],
            "employeename": order[7]
        }
        orders_list.append(order_dict)

    return jsonify(orders_list)


@app.route('/create_order', methods=['POST'])
def create_order():
    conn = create_connection()
    data = request.get_json()
    cursor = conn.cursor()
    query = sql.SQL("""INSERT INTO orders ("CustomerName","OrderType","TableNumber","OrderDate", "Price","employeename","status") VALUES(%s, %s, %s, CURRENT_TIMESTAMP,%s, %s, %s)""")
    cursor.execute(query, (
        data.get('CustomerName'),
        data.get('OrderType'),
        data.get('TableNumber'),
        data.get('Price'),
        data.get('employeename'),
        data.get('status')
    ))
    conn.commit()
    cursor.close()
    conn.close()
    return 'Order inserted successfully'


if __name__ == '__main__':
    app.run(debug=True)
