const express = require('express')
const sqlite3 = require('sqlite3').verbose();
const app = express()

app.get('/', (req, res) => {
    const db = new sqlite3.Database('./stocks.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        else {
            console.log('Connected to the chinook database.');
        }
    });
    db.serialize(() => {
        //db.each(`SELECT stocktickers,chromosome,max(sharpe) FROM garesults WHERE date='${day}'`, (err, row) => {
        db.each(`SELECT date,stocktickers,chromosome,max(sharpe) as maxSharpe FROM garesults GROUP BY date`, (err, row) => {
            if (err) {
                console.error(err.message);
            }
            //console.log(row.date[0]);
            res.json(row.date)
        });
    });
});

//app.post('/api/insert',(req,res) => {})

app.listen(3001, () => {
    console.log('listening on port 3001')
})