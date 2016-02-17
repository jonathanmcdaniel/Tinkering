var express = require('express');

var app = express();
app.put('/message/:ID', function(req, res){
  var sha1 = require('crypto').createHash('sha1').update(new Date().toDateString() + req.params.ID).digest('hex');
  res.end(sha1);
});

app.listen(process.argv[2]);
