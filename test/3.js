var fkn = require('./fucken');
var txt = fkn('./3.txt');

var re = /[^A-Z]([A-Z]{3}([a-z]{1})[A-Z]{3}[^A-Z])/g;
var ret = txt.match(re);

var s = '';
ret.forEach(function(item) {
  s += item[4];
});

console.log(s);
