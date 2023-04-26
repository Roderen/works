"use strict";
(function () {
  let calculator = {
    a: null,
    b: null,
    read () {
      let numOne = prompt('First number');
      let numTwo = prompt('Second number');
      if (numOne.trim() === '' || numTwo.trim() === '') throw new Error("It's empty string");
      this.a = Number(numOne.replace(/ /g, ''));
      this.b = Number(numTwo.replace(/ /g, ''));
      if (isNaN(this.a) || isNaN(this.b)) throw new Error("It's not a number");
    },
    sum: function () {
      return this.a + this.b;
    },
    mul: function () {
      return this.a * this.b;
    },
  };
  calculator.read();
  console.log(calculator.sum());
  console.log(calculator.mul());
})();