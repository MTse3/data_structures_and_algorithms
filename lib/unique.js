'use strict';
var arrayAdd = require(__dirname + '/../lib/add');

var unique = module.exports = exports = {
  unique: function  (array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      var original = true;

      for (var x = i + 1; x < array.length; x++) {
        if(array[i] === array[x]) {
          original = false;
        }
      };
      if(original) {
        arrayAdd.arrayAdd(newArray, array[i]);
      };
    };
    return newArray
  }
}
