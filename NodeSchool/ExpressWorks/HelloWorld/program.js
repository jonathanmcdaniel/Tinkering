var express = require('express');

var app = express();
app.get('/home', function(re, res){
  res.end('Hello World!');
});
app.listen(process.argv[2]);
