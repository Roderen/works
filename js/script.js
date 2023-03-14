"use strict";

let a = 10;
let b = 10;
let num = 1;
let result = null;

// #1-12
a === 0 ? console.log('Верно') : console.log('Неверно');
a > 0 ? console.log('Верно') : console.log('Неверно');
a < 0 ? console.log('Верно') : console.log('Неверно');
a >= 0 ? console.log('Верно') : console.log('Неверно');
a <= 0 ? console.log('Верно') : console.log('Неверно');
a !== 0 ? console.log('Верно') : console.log('Неверно');
a === 'test' ? console.log('Верно') : console.log('Неверно');
a === '1' ? console.log('Верно') : console.log('Неверно');
a > 0 && a < 5 ? console.log('Верно') : console.log('Неверно');
a === 0 || a === 2 ? console.log(a + 7) : console.log(a / 10);
a <= 1 && b >= 3 ? console.log(a + b) : console.log(a - b);
a > 2 && a < 11 || b >= 6 && b < 14 ? console.log(a + b) : console.log(a - b);


// #13
switch (num) {
  case 1:
    result = 'Зима'
    break;

  case 2:
    result = 'Весна'
    break;

  case 3:
    result = 'Лето'
    break;

  case 4:
    result = 'Осень'
    break;
}