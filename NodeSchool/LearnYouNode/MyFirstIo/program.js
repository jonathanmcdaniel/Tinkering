var fs = require('fs');

var lineCount = 0;

var buf = fs.readFileSync(process.argv[2]);
var file = buf.toString();

var fileLines = file.split("\n");
console.log(fileLines.length-1);
