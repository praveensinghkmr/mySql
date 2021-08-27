let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mySQL@123#',
    database: 'testdb'
});

connection.connect(function(err) {
    if(err) {
        return console.error('error:' + err.message);
    }

    console.log('Connected to the MySql server.');
});

// connection.end(function(err){
//     if(err){
//         return console.log('error:' + err.message);
//     }
// });

// connection.destroy();

// var pool = mysql.createPool({
//     connectionLimit: 5,
//     host: 'localhost',
//     user: 'root',
//     password: 'mySQL@123#',
//     database: 'testdb'
// });

// pool.getConnection(function(err, connection) {
//     // execute query
//     // ...
//     connnection.release();
// });

// pool.end(function(err) {
//     if (err) {
//       return console.log(err.message);
//     }
//     // close all connections
// });