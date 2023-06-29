"use strict";
(function () {
  const string = 'abracadabra';

  const uniqSymbolsCount = (str) => {
    const set = new Set();

    for (let i = 0; i < str.length; i++) {
      set.add(str[i]);
    }

    return set.size;
  }
  console.log(uniqSymbolsCount(string));
})();