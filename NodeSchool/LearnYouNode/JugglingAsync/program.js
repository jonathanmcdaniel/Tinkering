var http = require('http');

var httpData = {
  url1: "",
  url2: "",
  url3: "",
  done1: false,
  done2: false,
  done3: false
};

http.get(process.argv[2], function(response){
  response.on("data", function(data){
    httpData.url1 += data.toString();
  });
  response.on("end", function(){
    httpData.done1 = true;
    print();
  });
});

http.get(process.argv[3], function(response){
  response.on("data", function(data){
    httpData.url2 += data.toString();
  });
  response.on("end", function(){
    httpData.done2 = true;
    print();
  });
});

http.get(process.argv[4], function(response){
  response.on("data", function(data){
    httpData.url3 += data.toString();
  });
  response.on("end", function(){
    httpData.done3 = true;
    print();
  });
});


var print = function(){
  if (httpData.done1 !== false && httpData.done2 !== false && httpData.done3 !== false){
    console.log(httpData.url1);
    console.log(httpData.url2);
    console.log(httpData.url3);
  }
};
