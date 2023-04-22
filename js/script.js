"use strict";

(function () {
  function flatMethod(arr) {
    if (arguments.length === 0) throw new Error('Function accepts 1 argument');
    if (arguments.length > 1) throw new Error('Function accepts only 1 argument, too much arguments provided');

    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        newArray = [...newArray, ...(flatMethod(arr[i]))];
      } else {
        if (arr[i] != null) newArray.push(arr[i]);
      }
    }

    return newArray;
  }
  const arr = [1, 2, [3, 4], 5, 6, [[7, 8]], 9];
  console.log(flatMethod(arr));
})();