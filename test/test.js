var expect = require('chai').expect;
var array = require(__dirname + '/../lib/array');
var arrayAdd = require(__dirname + '/../lib/add');

var unique = require(__dirname + '/../lib/unique');
var frequency2 = require(__dirname + '/../lib/frequency2');



describe('testing the array add file', function() {
  it('should add to the array', function() {
    expect(arrayAdd.arrayAdd([2,4,5,9], 'string')).to.eql([2,4,5,9,'string']);
  })
})

describe('testing the array files', function() {
  it('should take something away', function() {
    expect(array.arrayPop([5,6,7])).to.eql([5,6]);
  })
})


describe('testing the unique file', function() {
  it('will remove the duplicates in an array', function() {
    expect(unique.unique([5,6,7,7])).to.eql([5,6,7]);
  })
})

describe('testing the unique file', function() {
  it('will remove the duplicates in an array', function() {
    expect(unique.unique([5,6,7,7])).to.eql([5,6,7]);
  })
})

describe('testing the unique file', function() {
  it('will remove the duplicates in an array', function() {
    expect(unique.unique([5,6,7,7])).to.eql([5,6,7]);
  })
})

describe('the frequency function will find the most common letter', function(){
  it('should return letter e', function(){
    expect(frequency2.frequency2(['felix, mariners, cano, seattle'])).to.eql('e');
  });
});
