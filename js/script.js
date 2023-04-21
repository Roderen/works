"use strict";
(function () {
  function generateNum(num = []) {
    function generateNumInner() {
      if (num.length > 100) return num;
      const randomNumber = Math.floor(Math.random() * 100);
      if (num.indexOf(randomNumber) !== -1) {
        return generateNumInner();
      }
      num.push(randomNumber);
      return num;
    }

    return generateNumInner;
  }
  const result = generateNum();
  result();
  result();
  result();
  result();
  console.log(result());
})();
