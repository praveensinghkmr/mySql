const router = require("express").Router();

const { response } = require("express");
// Server-Side Routing
//router.get ( "/", (request, response) => { 
//    response.render("home.html", { title : "Home"});
//}) ;

let mysql = require('mysql');
let config = require('../config.js');

let connection = mysql.createConnection(config);

// var jsonData= "Test String";

// let sql = `SELECT * FROM books`;
// connection.query(sql, (error, results, fields) => {
//   if (error) {
//     return console.error(error.message);
//   }
//   console.log(results);

//   jsonData = JSON.stringify(results);
// });


// Object.keys(result).forEach(function(key) {
//     var row = result[key];
//     console.log(row.name)

router.get("/books", (request, response) => {
  
  var jsonData= "Test String";

  let sql = `SELECT * FROM books`;
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results);
  
    jsonData = JSON.stringify(results);
  });

  response.json(jsonData);
})

router.get ( "/", (request, response) => { 

    response.render("home.html", { title : "Books"},);
    // response.render("home.html", { title : "Books", books: jsonData},);
    
}) ;

module.exports = router;