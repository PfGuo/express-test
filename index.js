var express = require('express');
var app = express();

var index = require('./app');

app.use('/', index);

app.listen('3000', function() {
    console.log("server is running.");
});