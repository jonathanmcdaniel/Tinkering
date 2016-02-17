var express = require('express');
var fs = require('fs');

var app = express();
app.get('/books', function(req, res){
  fs.readFile(process.argv[3], function(err, data){
    var file = data.toString();
    res.json(JSON.parse(file));
  });
});

app.listen(process.argv[2]);
