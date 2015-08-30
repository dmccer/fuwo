var fs = require('fs');
var ss = fs.readFileSync('./2.txt').toString().replace(/\u2028|\u2029/g, '');

var ssa = ss.split('');
var o = {};
ssa.forEach(function(s) {
  o[s] = o[s] || [];

  o[s].push(s);
});

for (var i in o) {
  if (o.hasOwnProperty(i)) {
    o[i] = o[i].length;
  }
}

console.log(o);
