'use strict';

// mimics array prototype Push
var arrayAdd = require(__dirname + '/lib/add');
// mimics array prototype Pop
var arrayPop = require(__dirname + '/lib/arrayPop');
// mimics array prototype Shift
var arrayShift = require(__dirname + '/lib/arrayShift');
// mimics array prototype Unshift
var arrayUnshift = require(__dirname + '/lib/arrayUnshift');
//takes and array and returns a copy with duplicates removed
var unique = require(__dirname + '/lib/unique');
//given array of english words, finds the most common letter and returns it
var frequency2 = require(__dirname + '/lib/frequency2');
