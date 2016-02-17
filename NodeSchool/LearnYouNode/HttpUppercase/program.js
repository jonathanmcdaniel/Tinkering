var http = require('http');

var server = http.createServer(function(req, res){
  if (req.method == 'POST') {
        var body = '';
        req.on('data', function (data) {
            body += data.toString().toUpperCase();
        });
        req.on('end', function () {
            res.end(body);
        });
    }
});
server.listen(process.argv[2]);
