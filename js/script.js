"use strict";

const number = parseInt(prompt('Число'));
const degree = parseInt(prompt('Степень'));

function exponentDegree(num, deg = 1) {
  if (!Number(num) || !Number(deg)) return 'some error';
  return num ** deg;
}

const result = exponentDegree(number, degree);

alert(result);