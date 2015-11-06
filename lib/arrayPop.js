var arrayPop = module.exports = exports = {
  arrayPop: function (array) {
    var lastNumber = array.length -1;
    var last = array[lastNumber];
    array.length = lastNumber;
    delete lastNumber;
    return last;
  }
}
