"use strict";
(function () {
  function checkPalindrome(num) {
    if (num < 0) {
      num = Math.abs(num);
    }

    let palindromeResult = {
      result: 0,
      steps: 0,
    };

    function iterNum(num2) {
      let reverseNum = +num2.toString().split("").reverse().join("");

      if (num2 === reverseNum) {
        palindromeResult.result = num2;
        return num2;
      }

      if (num2 !== reverseNum) {
        num2 = num2 + reverseNum;
        palindromeResult.steps++;
        iterNum(num2);
      }
    }

    iterNum(num);
    return palindromeResult;
  }

  console.log(checkPalindrome(31153));
})();