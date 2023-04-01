"use strict";

const number = parseInt(prompt('Число'))

if (number <= 1) alert('Число должно быть больше единицы')
if (isNaN(number)) alert('is NaN')
if (number === 2) alert('Простое')
if (number > 2) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      alert('false')
      break
    }
    alert('true')
    break
  }
}

// const number = parseInt(prompt('Число'))
//
// const calc = (n) => {
//   if (n <= 1) return 'Число должно быть больше единицы'
//   if (isNaN(n)) return 'is NaN'
//   if (n === 2) return 'Простое'
//   if (n > 2) {
//     for (let i = 2; i < n; i++) {
//       if (n % i === 0) {
//         return 'false'
//       }
//       return 'true'
//     }
//   }
// }
// alert(calc(number))