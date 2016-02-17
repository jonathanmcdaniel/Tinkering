var express = require('express');
var bodyparser = require('body-parser');

var app = express();
var qs = bodyparser.urlencoded({extended: false});
app.post('/form', qs, function(req, res){

  res.end(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);
