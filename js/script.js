"use strict";

const arr = [1, 2, 3, -1, -2, -3];
function returnArray(array) {
  const resultArr = []
  if (!array.length) return 'Массив пуст';

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 1) resultArr.push(array[i]);
  }

  if (!resultArr.length) return null;
  return resultArr;
}

alert(returnArray(arr))