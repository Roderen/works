"use strict";
(function () {
  const arr = [2, 8, 9];

  const indexOf = (array, el, fromIndex = 0) => {
    if (fromIndex >= array.length) return -1;
    if (fromIndex >= 0) {
      for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === el) {
          return i;
        }
      }
    }
    if (fromIndex < 0) {
      for (let i = array.length + fromIndex; i < array.length; i++) {
        if (array[i] === el) {
          return i;
        }

      }
    }
    return -1;
  }


  const lastIndexOf = (array, el, fromIndex = array.length) => {
    if (fromIndex >= array.length) fromIndex = array.length;

    let lastIndex = 0;

    for (let i = fromIndex; i >= 0; i--) {
      if (array[i] === el) lastIndex = i;
    }

    if (lastIndex === 0) return -1;
    return lastIndex;
  }
  console.log(lastIndexOf([2, 5, 9, 2], 2));


  module.exports = {indexOf, lastIndexOf};
})();