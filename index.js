var api = require('./api');
var ethercalc = require('./ether');

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 5000;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// get api
app.get('/api', api);
app.get('/ethercalc', ethercalc);

// error handler
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function() {
  console.log('GSX2JSON listening on port ' + port);
});
module.exports = app;
