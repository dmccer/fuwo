var citylist = require('./_dpcity.json');
var fs = require('fs');

// "上海|shanghai|SH",
// 
// {
//   name: '上海',
//   index: 'S',
//   pinyin: 'shanghai',
//   abbr: 'SH'
// }
citylist = citylist.map(function(city) {
  var attr_arr = city.split('|');

  return {
    name: attr_arr[0],
    pinyin: attr_arr[1],
    abbr: attr_arr[2],
    index: attr_arr[2][0]
  };
});

citylist.sort(function(a, b) {
  if (a.index > b.index) {
    return 1;
  }

  if (a.index < b.index) {
    return -1;
  }

  return 0;
});


fs.writeFileSync('./dpcity.json', JSON.stringify(citylist));