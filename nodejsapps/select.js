let mysql = require('mysql');
let config = require('./config.js');

let connection = mysql.createConnection(config);

let sql = `SELECT * FROM books`;
connection.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});


let sql1 = `SELECT * FROM books WHERE price>?`;
connection.query(sql1, [21], (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

let id = process.argv[2]; // pass argument to query

// below may lead to sql injection !
//let sql2 = `SELECT * FROM books WHERE id=` + id ;
let sql2 = `SELECT * FROM books WHERE id=` + mysql.escape(id);

connection.query(sql2, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

connection.end(); 