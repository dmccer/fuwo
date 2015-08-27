var fs = require('fs');

var source = require('./fw.json');

delete source.provinces;

var citylist = [];
Object.keys(source).forEach(function(key) {
  citylist = citylist.concat(source[key]);
});

var transformed = citylist.map(function(item) {
  return {
    name: item.cityName,
    pingyin: item.citySlug,
    abbr: item.cityCode.toUpperCase(),
    index: item.citySlug[0].toUpperCase()
  };
});

transformed.sort(function(a, b) {
  if (a.index > b.index) {
    return 1;
  }

  if (a.index < b.index) {
    return -1;
  }

  return 0;
});

fs.writeFileSync('./fw_transformed.json', JSON.stringify(transformed));
