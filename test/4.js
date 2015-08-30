var request = require('request');
var fs = require('fs');

var req = function(num) {
  request('http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=' + num, function(error, response, body) {
    if (!error && response.statusCode == 200) {

      var re = /\d+/g;
      var r = body.match(re);

      console.log(body, r);

      if (!r.length) {
        console.log('=====: ', body);
      }

      req(r[0]);
    }
  });
}

req(63579);
