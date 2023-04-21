"use strict";
(function () {
  function sum(num = 0) {
    function increse(increaseNum) {
      num += increaseNum;
      return num;
    }
    return increse;
  }

  const result = sum();
  result(3);
  result(5);
  result(20);
})();
