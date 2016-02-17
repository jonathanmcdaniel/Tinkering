var net = require("net");

var port = process.argv[2];
var server = net.createServer(function(socket){
  var d = new Date();
  var date = d.getFullYear() + "-" +(d.getMonth()+1) + "-" + addZero(d.getDate()) + " " + addZero(d.getHours()) + ":" + addZero(d.getMinutes());
  socket.write(date+"\n");
  socket.end();
});
server.listen(port);

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
