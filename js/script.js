"use strict";

const padString = (str, strLen, symbol, param = true) => {
  if (typeof str !== "string" || !str) throw new Error("It is not a string");
  if (typeof strLen !== "number" || !strLen)
    throw new Error("It is not a number");
  if (typeof symbol !== "string" || symbol.length !== 1 || !symbol)
    throw new Error("Only one character needed");
  if (typeof param !== "boolean") throw new Error("Need only true or false");

  if (strLen < str.length) return str.substr(0, strLen);

  let symbolLength = strLen - str.length;
  if (param === true) {
    return str + symbol.repeat(symbolLength);
  } else {
    return symbol.repeat(symbolLength) + str;
  }
};
console.log(padString("hello", 8, "*"));