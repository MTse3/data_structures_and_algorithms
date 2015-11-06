
function arrayPop (array) {
  var lastNumber = array.length -1;
  var last = array[lastNumber];
  array.length = lastNumber;
  delete lastNumber;
  return last;
}

//removes index 0
function arrayShift (array) {
  var newArray = [];
  for (var i = 0; i < array.length -1 ; i++) {
    newArray[i] = array[i+1]
  };
  return newArray
}

function arrayUnshift (array, thing) {
  for (var i = array.length - 1; i > 0; i--) {
    array[i+1] = array [i];
  };
  array[0] = thing;
  return array
}

// removes duplictes
function unique (array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var original = true;

    for (var x = i + 1; x < array.length; x++) {
      if(array[i] === array[x]) {
        original = false;
      }
    };
    if(original) {
      arrayAdd(newArray, array[i]);
    };
  };
  return newArray
}


// console.log(frequency2(array));
// console.log(arrayAdd(array, 'string'));
// console.log(arrayPop(array));
// console.log(array);
// console.log(arrayShift(array))
