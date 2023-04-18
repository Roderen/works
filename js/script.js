"use strict";

const number = parseInt(prompt('Число'));
const degree = parseInt(prompt('Степень'));

function exponentDegree(num, deg = 1) {
  if (!num || !deg) return 'Is null';
  if (isNaN(num) || isNaN(deg)) return 'Is not a number';
  return num ** deg;
}

const result = exponentDegree(number, degree);
console.log(result);