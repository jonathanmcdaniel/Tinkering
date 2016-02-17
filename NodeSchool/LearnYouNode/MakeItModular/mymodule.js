var fs = require('fs');
module.exports = function(directory, filter, callback){
  fs.readdir(directory, function(error, list){
    if (error){
      return callback(error);
    }
    var data = new Array();
    for (var i = 0; i < list.length; i++){
      if (list[i].split(".")[1] === filter){
        data.push(list[i]);
      }
    }
    callback(error, data);
  });
};
