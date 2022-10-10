const sqlite3 = require('sqlite3').verbose();
const selectdb =(day) => {
  let db = new sqlite3.Database('./src/database/stocks.db',sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    else{
      console.log('Connected to the chinook database.');
    }
  });
  
  db.serialize(() => {
    db.each(`SELECT stocktickers,chromosome,max(sharpe) FROM garesults WHERE date='${day}'`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row);
    });
  });
  
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });
  
}
  
export default selectdb;
//selectdb('2022-08-03')

