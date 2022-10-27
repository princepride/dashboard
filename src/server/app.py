from flask import Flask,request,jsonify,send_file,url_for
from flask_cors import CORS
import json
import sqlite3

app = Flask(__name__)
CORS(app)

@app.route("/stockportfolio",methods = ["POST"])
def stockportfolio():
    req = request.get_json(silent=False, force=True)
    date = req['date']
    conn = sqlite3.connect(r'../database/stocks.db')
    print('Connected to the database stocks.db')
    cursor = conn.cursor()
    res = cursor.execute(
        "SELECT date,stocktickers,chromosome,max(sharpe) as sharpe,return,risk FROM garesults WHERE date is ?",
        (date,)
    )
    data = res.fetchall()
    cursor.close()
    conn.close()
    print(data)
    if len(data) > 0:
        return jsonify({"date":data[0][0],
        "stocktickers":data[0][1],"chromosome":data[0][2],"sharpe":data[0][3],
        "return":data[0][4],"risk":data[0][5]})
    else:
        return jsonify({"date":None,"price":None})

@app.route("/stockforecast",methods = ["POST"])
def stockforecast():
    req = request.get_json(silent=False, force=True)
    stock = req['stock']
    conn = sqlite3.connect(r'../database/lstm_prediction.db')
    print('Connected to the database lstm_prediction.db')
    cursor = conn.cursor()
    res = cursor.execute(
        "SELECT group_concat(date) as date,group_concat(price) as price FROM predictions WHERE ticker is ?",
        (stock,)
    )
    data = res.fetchall()
    cursor.close()
    conn.close()
    print(data)
    if len(data) > 0:
        return jsonify({"date":data[0][0],"price":data[0][1]})
    else:
        return jsonify({"date":None,"price":None})

@app.route("/groupstockforecast",methods = ["POST"])
def groupstockforecast():
    req = request.get_json(silent=False, force=True)
    stocks = req['stocks']
    conn = sqlite3.connect(r'../database/lstm_prediction.db')
    print('Connected to the database lstm_prediction.db')
    cursor = conn.cursor()
    sql = "SELECT group_concat(date) as date,group_concat(price) as price FROM predictions WHERE"
    for stock in range(len(stocks)-1):
        sql += " ticker is ? OR"
    sql += ' ticker is ?'
    res = cursor.execute(
        sql, (stocks)
    )
    data = res.fetchall()
    cursor.close()
    conn.close()
    print(data)
    if len(data) > 0:
        return jsonify({"date":data[0][0],"price":data[0][1]})
    else:
        return jsonify({"date":None,"price":None})


if __name__ == '__main__':
    app.run(host="localhost", port=3001, debug=True)