"use strict";

const mainFunction = (callback) => {
  const a = +prompt("Число:");
  const b = +prompt("Степень:");
  callback(a, b);
};

const exponentiation = (a, b) => {
  const result = a ** b;
  alert(result);
};

mainFunction(exponentiation);
