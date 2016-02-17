var fs = require('fs');

var extension = process.argv[3];
fs.readdir(process.argv[2], function(error, list){
  for (var i = 0; i < list.length; i++){
    if (list[i].split(".")[1] === extension){
      console.log(list[i]);
    }
  }
});
