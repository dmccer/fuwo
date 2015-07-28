var citylist = require('./_citylist.json');
var fs = require('fs');

citylist = citylist.filter(function(item) {
  return item.parent3 === '中国' && item.parent2 !== '台湾';
});

citylist = citylist.map(function(item) {
  return {
    id: item.id,
    name: item.name,
    index: item.en[0],
    pinyin: item.en,
    province: item.parent2
  };
});

citylist.sort(function(a, b) {
  if (a.pinyin[0] > b.pinyin[0]) {
    return 1;
  }

  if (a.pinyin[0] < b.pinyin[0]) {
    return -1;
  }

  return 0;
});


fs.writeFileSync('./city.json', JSON.stringify(citylist));

var charIndexHtml = function(index) {
  return '<h2>' + index + '</h2>';
}
var itemHtml = function(name) {
  return '<div>' + name + '</div>';
}

var html = '';
var currentIndex = null;
citylist.forEach(function(item) {
  if (item.index !== currentIndex) {
    html += charIndexHtml(item.index);
    currentIndex = item.index;
  }

  html += itemHtml(item.name);
});

fs.writeFileSync('./city.html', html);