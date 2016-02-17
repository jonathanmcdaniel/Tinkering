var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
  if (req.method == 'GET') {
    var queryData = url.parse(req.url, true).query;
    res.writeHead(200, {"Content-Type": "application/json"});
    if (queryData.iso && url.parse(req.url).pathname === '/api/parsetime') {
      var date = new Date(queryData.iso);
      var dateObject = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      };
      res.end(JSON.stringify(dateObject));
    } else if(queryData.iso && url.parse(req.url).pathname === '/api/unixtime') {
      var date = new Date(queryData.iso);
      var dateObject = {
        unixtime: date.getTime()
      };
      res.end(JSON.stringify(dateObject));
    }
  }
});
server.listen(process.argv[2]);
