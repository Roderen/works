"use strict";

// #1
const numbers = () => {
  let result = []
  for (let i = 10; i < 21; i++) {
    result.push(i)
  }
  return result.join(', ')
}
// console.log(numbers())

// #2
const squareNumbers = () => {
  let result = []
  for (let i = 10; i < 21; i++) {
    result.push(i**2)
  }
  return result.join(', ')
}
// console.log(squareNumbers())

// #3
const multiTable = () => {
  let result = '';
  for (let i = 1; i < 10; i = i + 1) {
    for(let j = 1; j < 8; j = j + 1) {
      result += ' ' + i * j;
      if (i * j < 10) result += ' ';
    }
    result += '\n'
  }
  return result;
};

// console.log(multiTable());

// #4
const sumNumbers = () => {
  let result = 0;
  for (let i = 1; i <= 15; i++) {
    result += i;
  }
  return result;
};
// console.log(sumNumbers());

// #5
const multiNumbers = (number) => {
  let result = 1;
  for (let i = 15; i <= number; i++) {
    result *= i;
  }
  return result;
};
// console.log(multiNumbers(35));

// #6
const meanNumber = () => {
  let result = 0;
  for (let i = 1; i <= 500; i++) {
    result += i;
  }
  return result / 500;
};
// console.log(meanNumber());

// #7
const pairNumber = () => {
  let result = 0;
  for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) result += i;
  }
  return result;
};
// console.log(pairNumber());

// #8
const multipleNumber = () => {
  let result = 0;
  for (let i = 100; i <= 120; i++) {
    if (i % 3 === 0) result += i
  }
  return result;
};
// console.log(multipleNumber());

// #9-11
const naturalNumber = (number) => {
  let divider = [];
  let pairDivider = [];
  let sumDivider = 0;
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) divider.push(i)
  }
  for (let i = 0; i < divider.length; i++) {
    if (divider[i] % 2 === 0) pairDivider.push(divider[i]);
  }
  for (let i = 0; i < pairDivider.length; i++) {
    if (pairDivider.length) sumDivider += pairDivider[i]
  }

  return `
  Делители числа: ${divider.join(', ')}
  Кол-во парных делителей числа: ${pairDivider.length}
  Сумма парных детилетей числа: ${sumDivider}
  `;
};
// console.log(naturalNumber(6));

// #3
const multiTableFull = () => {
  let result = '';
  for (let i = 1; i < 11; i = i + 1) {
    for(let j = 1; j < 11; j = j + 1) {
      result += ' ' + i * j;
      if (i * j < 10) result += ' ';
    }
    result += '\n'
  }
  return result;
};

console.log(multiTableFull());