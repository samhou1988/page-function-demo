var all = document.querySelector('html').outerHTML.match(/<[a-z]{1,}/ig);
var result = {};
all.forEach(function (value, index, array) {
  console.log(value);
  result[value] = index;
});

console.log(result);
