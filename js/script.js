"use strict";

const number = parseInt(prompt('Введите число', '12'));

const ageFunc = (number) => {
  if (isNaN(number)) return "Это не число";
  if (number < 0) return "Это отрицательное число";
  if (number % 10 === 1 || number === 0) return `${number} год`;
  if (number % 100 >= 5 && number % 100 <= 20) return `${number} лет`;
  if (number % 10 >= 2 && number % 10 <= 4) return `${number} года`;
  return `${number} лет`;
};
console.log(ageFunc(number));