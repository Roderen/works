"use strict";

// #1
const arr1 = ['a', 'b', 'c', 'd']
arr1.splice(1, 0, '+')
arr1.splice(-1, 0, '+')
arr1.splice(3, 0, ',')
alert(arr1.join(''))

// #2
const arr2 = [2, 5, 3, 9]
const result = (arr2[0] + arr2[1]) * (arr2[2] + arr2[3])
alert(result)

// #3
const arr3 = [[1, 2, 3], [4, 5, 6], [7,8,9]]
let result2 = arr3.reduce((acc, item) => acc.concat(item))
alert(result2.find(item => item === 4))

// №4
const arr4 = {
  js:['jQuery', 'Angular'],
  php: 'hello',
  css: 'world'
}
alert(arr4.js.find(item => item === 'jQuery'))

// #5
const arr5 = []
for (let i = 1; i < 6; i++) {
  arr5.push('x'.repeat(i))
}
alert(arr5)

// #6
const arr6 = []
for (let i = 1; i < 6; i++) {
  arr6.push(i.toString().repeat(i))
}
alert(arr6)

// #7
const arrayFill = (val, num) => {
  const arr = []
  for (let i = 0; i < num; i++) {
    arr.push(val)
  }
  return arr
}
alert(arrayFill('x', 5))

// #8
const arr8 = [2, 4, 2, 3, 7]
let result3 = 0
for (let i = 0; i < arr8.length; i++) {
  result3 += arr8[i]
  if (result3 > 10) {
    alert(`Нужно сложить элементов - ${i+1}`)
    break;
  }
}

// #9
const reverse = arr => {
  return arr.map((curr, index) => arr[arr.length - 1 - index])
}

const arr = [ 1, 2, 3, 4, 5];
alert(reverse(arr));

// #10
const arr10 = [[1, 2, 3], [4, 5], [6]]
const flatArr1 = arr10.flat()
let result4 = 0;
for (let i = 0; i < flatArr1.length; i++) {
  result4 += flatArr1[i]
}
alert(result4)

// #11
const arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
const flatArr2 = arr11.flat(2)
let result5 = 0;
for (let i = 0; i < flatArr2.length; i++) {
  result5 += flatArr2[i]
}
alert(result5)