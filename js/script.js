"use strict";
(function () {
  // #1
  function getFactorial(n) {
    if (n === 1 || n === 0) return 1;
    return n * getFactorial(n - 1);
  }

  console.log(getFactorial(3));

  // #2
  function getPow(num, deg) {
    if (deg === 1) return num;
    return num * getPow(num, deg - 1);
  }

  console.log(getPow(3, 2));

  // #3
  function getSum(a, b) {
    if (b === 0) return a;
    if (a === 0) return b;
    let c = getSum(a - 1, b);
    return ++c;
  }

  console.log(getSum(10, 5));
})();
