"use strict";
(function () {
  function checkPalindrome(num) {
    if (num < 0) num = Math.abs(num);

    let palindromeResult = {
      result: 0,
      steps: 0,
    };

    function checkPalindromeInner(numInner) {
      const reverseNum = +numInner.toString().split("").reverse().join("");

      if (numInner === reverseNum) {
        palindromeResult.result = numInner;
        return numInner;
      }

      if (numInner !== reverseNum) {
        numInner = numInner + reverseNum;
        palindromeResult.steps++;
        checkPalindromeInner(numInner);
      }
    }

    checkPalindromeInner(num);
    return palindromeResult;
  }

  console.log(checkPalindrome(96));
})();
