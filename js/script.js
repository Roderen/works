"use strict";

const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// #1
const minCount = (arr) => {
  return Math.min(...arr);
};
console.log(minCount(arr));

// #2
const maxCount = (arr) => {
  return Math.max(...arr);
};
console.log(maxCount(arr));

// #3
const negativeElements = (arr) => {
  let count = 0;
  arr.reduce((accum, item) => item < 0 && count++);
  return count;
};
console.log(negativeElements(arr));

// #4
const oddElements = (arr) => {
  let count = 0;
  arr.reduce((accum, item) => item > 0 && item % 2 !== 0 && count++);
  return count;
};
console.log(oddElements(arr));

// #5
const evenElements = (arr) => {
  let count = 0;
  arr.reduce((accum, item) => item > 0 && item % 2 === 0 && count++);
  return count;
};
console.log(evenElements(arr));

// #6
const sumOfEvenElements = (arr) => {
  let result = 0;
  arr.reduce((accum, item) => {
    if (item > 0 && item % 2 === 0) result += item;
  });
  return result;
};
console.log(sumOfEvenElements(arr));

// #7
const sumOfOddElements = (arr) => {
  let result = 0;
  arr.reduce((accum, item) => {
    if (item > 0 && item % 2 !== 0) result += item;
  });
  return result;
};
console.log(sumOfOddElements(arr));

// #8
const sumOfElements = (arr) => {
  let result = 0;
  arr.reduce((accum, item) => {
    if (item > 0) result += item;
  });
  return result;
};
console.log(sumOfElements(arr));

// #9
const findMaxCount = (arr) => {
  let maxCount = Math.max(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < maxCount) arr[i] = 0;
  }
  return arr;
};
console.log(findMaxCount(arr));
