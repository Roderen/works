"use strict";

// #1
let x = 10;
let y = 7;

x > y ? alert('x больше, чем y') : alert('x не больше, чем y')



// #2
const num = parseInt(prompt('Введите число'));

const numResult = num % 2 === 0 ? `Число ${num} четное` : `Число ${num} нечетное`;
alert(numResult);



// #3
const numTwo = parseInt(prompt('Введите целое число'));
if (numTwo) {
  const numTwoLength = numTwo.toString().length;
  const result = numTwo > 0 ? `положительное` : `отрицательное`;

  switch (numTwoLength) {
    case 1:
      alert(`Число ${numTwo} однозначное ${result}`)
      break;
    case 2:
      alert(`Число ${numTwo} двухзначное ${result}`)
      break;
    case 3:
      alert(`Число ${numTwo} трехзначное ${result}`)
      break;
  }
}



// #4
const one = parseInt(prompt('Первое число:', '7'));
const two = parseInt(prompt('Первое число:', '3'));
const three = parseInt(prompt('Первое число:', '9'));

if (one && two && three) {
  alert(Math.max(one, two, three));
} else {
  alert('Вы не ввели числа');
}



// #5
const firstLen = parseInt(prompt('Первая сторона'));
const secondLen = parseInt(prompt('Вторая сторона'));
const thirdLen = parseInt(prompt('Третья сторона'));

if (firstLen + secondLen > thirdLen && secondLen + thirdLen > firstLen && firstLen + thirdLen > secondLen) {
  alert('Может существовать');
} else {
  alert('Не может существовать');
}
