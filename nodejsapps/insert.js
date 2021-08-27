let mysql  = require('mysql');
let config = require('./config.js');
let connection = mysql.createConnection(config);


//  Approach I
// insert statment
// let sql = `INSERT INTO books(title,author,price)
//            VALUES('Learn how to insert a new row','PKS', 20)`;

// // execute the insert statment
// connection.query(sql);

// Approach II

// let stmt = `INSERT INTO books(title,author,price)
//             VALUES(?,?,?)`;
// let book = ['Insert Row and Get ID','PKS', 21];

// // execute the insert statment
// connection.query(stmt, book, (err, results, fields) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   // get inserted id
//   console.log('Book Id:' + results.insertId);
// });

// Approach III
let stmt = `INSERT INTO books(title,author,price)
            VALUES ?`;
let books = [
    ['Insert Rows and Get ID - A','PKS', 22],
    ['Insert Row and Get ID - B','PKS', 23],
];

// execute the insert statment
connection.query(stmt, [books], (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  // get inserted id
  console.log('Book Id:' + results.insertId);
});

connection.end();
