var express = require('express');
var app = express();
var path = require('path');

var __projectRoot = __dirname + '/../../';

app.get('/', function (req, res) {
    res.sendFile(path.join(__projectRoot + '/index.html'));
});

console.log('Server up and running....');
app.listen(8080);