let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mySQL@123#',
    database: 'testdb'
});
// connect to the MySQL server
connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    let createBooks = `CREATE TABLE IF NOT EXISTS books1(
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        price DECIMAL
        ) ENGINE=INNODB;`;
  
    connection.query(createBooks, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }
    });
  
    connection.end(function(err) {
      if (err) {
        return console.log(err.message);
      }
    });
  });

