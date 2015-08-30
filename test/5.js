var pickle = require('pickle');
var fs = require('fs');

var format = function(c, n) {
  var s = '';
  var i = 0;
  while (i < n) {
    s += c;
    i++;
  }

  return s;
}
pickle.loads(fs.readFileSync('./banner.p').toString(), function(r) {
  r.forEach(function(line) {
    var s = '';

    line.forEach(function(col) {
      s += format(col[0], col[1]);
    });

    console.log(s);
  });
})
