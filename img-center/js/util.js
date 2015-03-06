function each(obj, callback) {
  if (isArray(obj)) {
    for (var i=0, len=obj.length; i<len; i++) {
      callback(i, obj[i], obj);
    }
  } else if (isObject(obj)) {
    for (var key in obj) {
      callback(key, obj[key], obj);
    }
  }
}

function $(ele) {
  return document.querySelector(ele);
}

function isArray(obj) {
  return Object.prototype.toString.call(obj) == '[object Array]';
}

function isObject(obj) {
  return !isWindow(obj) && !isNull(obj) && Object.prototype.toString.call(obj) == '[object Object]';
}

function isWindow(obj) {
  return obj.top == obj;
}

// test
var arr = [1, 20, 30, 40];
each(arr, function (index, value, arr) {
  console.log('index: ' + index, ',value: ' + value, ', arr is: ' + arr);
});