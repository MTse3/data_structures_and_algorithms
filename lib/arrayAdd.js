'use strict';

var arrayAdd = module.exports = exports = {
  arrayAdd: function(array, thing) {
    array[array.length] = thing;
    return array
  }
};
