var arrayUnshift = module.exports = exports = {
  arrayUnshift: function(array, thing) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      newArray[i+1] = array [i];
    };
    newArray[0] = thing;
    return newArray
  }
}
