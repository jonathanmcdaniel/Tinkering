var http = require('http');

var httpData = "";

http.get(process.argv[2], function(response){
  response.on("data", function(data){
    httpData += data.toString();
  });
  response.on("end", function(){
    console.log(httpData.length);
    console.log(httpData);
  });
});
