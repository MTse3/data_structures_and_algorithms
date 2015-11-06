'use strict';

var frequency2 = module.exports = exports = {
  frequency2: function (array) {
    var alphabet = {};
    var commonLetter = '';
    for (var i = 0; i < array.length; i++) {
      for (var c = 0; c < array[i].length; c++) {
        var character = array[i].charAt(c);
        if (!alphabet[character]) {
          alphabet[character] = 0;
        }
        alphabet[array[i].charAt(c)]++;
        if(commonLetter == '' || alphabet[character] > alphabet[commonLetter]) {
          commonLetter = character;
        }
      };
    };
    return commonLetter
  }
};
