"use strict";

const number = parseInt(prompt('Number', '11'))

if (number <= 1) alert('NaN');
if (number > 1) {
  let i = 2;
  while (number % i !== 0) {
    i++;
  }
  if (number === i) alert(`Число ${number} простое`);

  /* Не могу понять почему не получается сделать через for... ¯\_(ツ)_/¯ */
  // for (let i = 2; number % i !== 0; i++) {
  //   if (number === i) {
  //     alert(number)
  //   }
  // }
}