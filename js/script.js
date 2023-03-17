"use strict";

const number = parseInt(prompt('Введите число', '3245'));

if (number >= 0) {
  let lastNumber = number.toString().slice(-1);
  lastNumber = Number(lastNumber);

  if (lastNumber === 1) {
    alert(`${number} год`);
  } else if (lastNumber >= 2 && lastNumber <= 4) {
    alert(`${number} года`);
  } else {
    alert(`${number} лет`);
  }
} else {
  alert('Это не число!');
}