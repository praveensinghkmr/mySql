const express = require("express");

const home = require("./controllers/home");

const app = express() ; // create new web server with JS execution engine

app.listen ( 9002 ) ; // listening socket to create a new com. socket for browser to send HTTP Request

app.set("view engine","vash") ; // integrating vash eview engine with express framework
app.engine("html", require("vash").__express);

// Main Routes
app.use("/", home);