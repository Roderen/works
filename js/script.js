"use strict";

// const indexOfMethod = (arr, el, from = 0) => {
//   if (arr.constructor !== Array) throw new TypeError('This element is not an array')
//   if (from >= arr.length - 1) return -1
//   if (from < 0) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//       if (arr[i] === el) return i
//     }
//   }
//   for (let i = from; i < arr.length; i++) {
//     if (arr[i] === el) return i
//   }
// }
// const items = ['a', 'b', 'c', 'd', 'e', 'f']
// console.log(indexOfMethod(items, 'e'))



// const lastIndexOfMethod = (arr, el, from = 0) => {
//   if (arr.constructor !== String) throw new TypeError('This element is not an array')
//   if (from >= arr.length - 1) return -1
//   let lastElementIndex = 0
//
//   if (arr.length > 1) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//       if (arr[i] === el[0]) return i
//     }
//   }
//   if (arr.length === 1) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//       if (arr[i] === el) return i
//     }
//   }
//
//   return lastElementIndex
// }
// const stroke = 'Hello World'
// console.log(lastIndexOfMethod(stroke, 'wo'))
// console.log(stroke.lastIndexOf('ld'))