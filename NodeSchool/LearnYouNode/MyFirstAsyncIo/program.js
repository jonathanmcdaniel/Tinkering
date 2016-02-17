var fs = require('fs');

var lineCount = 0;

fs.readFile(process.argv[2], function(error, buf){
  var file = buf.toString();

  var fileLines = file.split("\n");
  console.log(fileLines.length-1);
});
