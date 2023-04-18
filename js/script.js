"use strict";

function equals(a, b) {
  return a === b;
}

console.log(equals(1, 1));

function compare(a, b) {
  return (a + b) > 10
}

console.log(compare(1, 1));

function checkBoolean(a) {
  return a < 0
}

console.log(checkBoolean(-1))