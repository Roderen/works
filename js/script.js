"use strict";

const numOrStr = prompt('input number or string');
numOrStr === null || numOrStr.trim() === '' || isNaN(+numOrStr) ? console.log('Error') : console.log('Success');