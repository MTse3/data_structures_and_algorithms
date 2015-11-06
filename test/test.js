var expect = require('chai').expect;
var arrayAdd = require(__dirname + '/../lib/add');
var arrayPop = require(__dirname + '/../lib/arrayPop');
var arrayShift = require(__dirname + '/../lib/arrayShift');
var arrayUnshift = require(__dirname + '/../lib/arrayUnshift');
var unique = require(__dirname + '/../lib/unique');
var frequency2 = require(__dirname + '/../lib/frequency2');

describe('testing the array add file', function() {
  it("should add 'felix' to the array", function() {
    expect(arrayAdd.arrayAdd([2,4,5,9], 'felix')).to.eql([2,4,5,9,'felix']);
  });
});

describe('testing the array pop file', function() {
  it('should take away and return the last value', function() {
    expect(arrayPop.arrayPop([5,6,7])).to.eql(7);
  });
});

describe('testing the array shift file', function() {
  it('should shift array to the left and remove lo-mo', function() {
    expect(arrayShift.arrayShift(['lo-mo', 'cano', 'cruz'])).to.eql(['cano','cruz']);
  });
});

describe('testing the Unshift file', function() {
  it('will add 7 to beginning of array', function() {
    expect(arrayUnshift.arrayUnshift([5,6,7], 7)).to.eql([7,5,6,7]);
  });
});

describe('testing the unique file', function() {
  it('will remove the duplicates in an array return [5,6,7]', function() {
    expect(unique.unique([5,6,7,7])).to.eql([5,6,7]);
  });
});

describe('the frequency function will find the most common letter', function(){
  it('should return letter e', function(){
    expect(frequency2.frequency2(['felix, mariners, cano, seattle'])).to.eql('e');
  });
});
