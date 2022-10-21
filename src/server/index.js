const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express()
const cors = require("cors");

app.use(cors());
app.use(express.json());


app.put('/stockportfolio', (req, res) => {
    const date = req.body.date;
    const db = new sqlite3.Database('./stocks.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        else {
            console.log('Connected to the stocks database.');
        }
    });
    db.serialize(() => {
        //db.each(`SELECT stocktickers,chromosome,max(sharpe) FROM garesults WHERE date='${day}'`, (err, row) => {
        db.each(`SELECT date,stocktickers,chromosome,max(sharpe) as sharpe,return,risk FROM garesults WHERE date is ?`, 
        [date],
        (err, row) => {
            if (err) {
                console.error(err.message);
            }
            res.send(row)
        });
    });
});

app.put('/stockforecast', (req, res) => {
    const stock = req.body.stock;
    const db = new sqlite3.Database('./lstm_prediction.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        else {
            console.log('Connected to the lstm_prediction database.');
        }
    });
    db.serialize(() => {
        //db.each(`SELECT stocktickers,chromosome,max(sharpe) FROM garesults WHERE date='${day}'`, (err, row) => {
        db.each(`SELECT group_concat(date) as date,group_concat(price) as price FROM predictions WHERE ticker is ?`, 
        [stock],
        (err, row) => {
            if (err) {
                console.error(err.message);
            }
            console.log(row)
            res.send(row)
        });
    });
});

app.put('/groupstockforecast', (req, res) => {
    const stocks = req.body.stocks;
    const db = new sqlite3.Database('./lstm_prediction.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        else {
            console.log('Connected to the lstm_prediction database.');
        }
    });
    let sql = 'SELECT group_concat(date) as date,group_concat(price) as price FROM predictions WHERE'
    for (let i = 0; i < stocks.length-1; i++) {
        sql +=' ticker is ? OR';
    }
    sql += ' ticker is ?'
    db.serialize(() => {
        //db.each(`SELECT stocktickers,chromosome,max(sharpe) FROM garesults WHERE date='${day}'`, (err, row) => {
        db.each(sql, 
        stocks,
        (err, row) => {
            if (err) {
                console.error(err.message);
            }
            console.log(row)
            res.send(row)
        });
    });
});

app.listen(3001, () => {
    console.log('listening on port 3001')
})