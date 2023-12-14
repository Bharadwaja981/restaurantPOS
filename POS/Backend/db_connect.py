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
        commit_and_close(conn,cur)
        return jsonify({'data': data[0][0]})
    except psycopg2.Error as e:
        return jsonify({'error': str(e)})

@app.route('/get_orders_for_day', methods=['POST'])
def get_orders_for_today():
    conn = create_connection()
    cursor = conn.cursor()
    data = request.get_json()
    query = """
        SELECT * FROM public.orders
        WHERE LOWER(status) = 'open' and "TableNumber" = %s
    """

    cursor.execute(query,(data['tableNumber'],))
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
            "employeename": order[7],
            "status": order[8]
        }
        orders_list.append(order_dict)
    return jsonify(orders_list)

@app.route('/get_orders_list', methods=['GET', 'POST'])
def get_orders_list():
    conn = create_connection()
    cursor = conn.cursor()
    query = """
        SELECT * FROM public.orders
    """
    cursor.execute(query)
    orders = cursor.fetchall()

    cursor.close()
    conn.close()

    # Convert categories to a list of dictionaries for JSON serialization
    order_list = []
    for order in orders:
        order_dict = {
            "OrderID": order[0],
            "CustomerName": order[1],
            "OrderType": order[2],
            "TableNumber": order[3],
            "OrderDate": order[4].isoformat(),
            "Price": order[5],
            "PaymentType": order[6],
            "EmployeeName": order[7],
            "Status": order[8]
        }
        order_list.append(order_dict)

    return jsonify(order_list)

@app.route('/get_item_list', methods=['GET', 'POST'])
def get_item_list():
    conn = create_connection()
    cursor = conn.cursor()
    query = """
        SELECT * FROM public.items
    """
    cursor.execute(query)
    items = cursor.fetchall()

    # Convert categories to a list of dictionaries for JSON serialization
    item_list = []
    for item in items:
        item_dict = {
            "ItemId": item[0],
            "ItemName": item[1],
            "CategoryId": item[2],
            "Price": item[3]
        }
        item_list.append(item_dict)

    cursor.close()
    conn.close()

    return jsonify(item_list)

@app.route('/del_category/<int:category_id>', methods=['DELETE'])
def del_category(category_id):
    conn = create_connection()
    cursor = conn.cursor()
    query = """
        DELETE FROM category WHERE id = %s
    """
    cursor.execute(query,(category_id,))
    commit_and_close(conn,cursor)
    return 'category deleted successfully'


@app.route('/get_category_list', methods=['GET', 'POST'])
def get_category_list():
    conn = create_connection()
    cursor = conn.cursor()
    query = """
        SELECT * FROM public.category
    """
    cursor.execute(query)
    categories = cursor.fetchall()

    cursor.close()
    conn.close()

    # Convert categories to a list of dictionaries for JSON serialization
    category_list = []
    for category in categories:
        category_dict = {
            "id": category[0],
            "categoryname": category[1]
        }
        category_list.append(category_dict)

    return jsonify(category_list)

@app.route('/add_category', methods=['POST'])
def add_category():
    conn = create_connection()
    data = request.get_json()
    cursor = conn.cursor()
    insert_string = "INSERT INTO category (categoryname) VALUES(' "+data.get('categoryname')+" ')"
    cursor.execute(insert_string);
    commit_and_close(conn,cursor)
    return 'new category inserted successfully'

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
    commit_and_close(conn,cursor)
    return 'Order inserted successfully'

def commit_and_close(conn,cursor):
    conn.commit()
    cursor.close()
    conn.close()


if __name__ == '__main__':
    app.run(debug=True)
