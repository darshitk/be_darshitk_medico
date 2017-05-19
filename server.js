require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var app = express();
var morgan = require('morgan');
var connectionUrl = process.env.CONNECTION_URL;
var port = process.env.PORT;

// configure app
app.use(morgan('dev'));

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mongoose = require('mongoose');
mongoose.connect(connectionUrl); // connect to database

var routesPath = path.join(__dirname, 'routes');
fs.readdirSync(routesPath).forEach(function(file) {
   app.use('/', require(routesPath + '/' + file));
});

// START THE SERVER
app.listen(port);
console.log('Node MEAN Server running on port ' + port);
module.exports = app;