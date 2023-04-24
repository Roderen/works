"use strict";
(function () {
  let calculator = {
    a: 0,
    b: 0,
    read: function () {
      this.a = +prompt("Первое число"),
      this.b = +prompt("Второе число");
      if (isNaN(this.a) || isNaN(this.b)) throw new Error("It's not a number");
      if (this.a === null || this.b === null) throw new Error("You need to enter a number");
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