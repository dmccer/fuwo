var fs = require('fs');

module.exports = function(file) {
  var txt = fs.readFileSync(file).toString().replace(/\u2028|\u2029/g, '');

  fs.writeFileSync(file, txt);

  return txt;
}
