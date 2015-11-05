var array = [2,3,4,4,5];


function arrayAdd (array, thing) {
  array[array.length] = thing;
  return array
}

function arrayPop (array) {

  return array[array.length - 1]
}

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
  var original = true;
  for (var i = 0; i < array.length; i++) {
    original = true;
    for (var x = i + 1; x <array.length; x++) {
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

//find most common letter
function frequency2 (array) {

}
console.log(unique(array));

// console.log(arrayAdd(array, 'string'));
// console.log(arrayPop(array));
// console.log(arrayShift(array))

