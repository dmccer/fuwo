var fs = require('fs');
var path = require('path');
var dir = './channel';
var files = fs.readdirSync(dir);

files.forEach(function(filename) {
  var fc = fs.readFileSync(path.join(dir, filename)).toString();

  // console.log(fc);

  if (fc.indexOf('Next') === -1) {
    console.log(filename, fc);
  }
});
