"use strict";

// #1
const numOrStr = prompt('input number or string');
numOrStr === null || numOrStr.trim() === '' || isNaN(+numOrStr) ? console.log('Error') : console.log('Success');


// #2
switch (numOrStr && numOrStr.trim() && isNaN(+numOrStr)) {
  case null:
    console.log('Null')
    break;

  case '':
    console.log('Empty string')
    break;

  case true:
    console.log('NaN')
    break;

  default:
    console.log('Success')
    break;
}