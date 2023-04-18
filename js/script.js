"use strict";

const x = 4;
const y = 9;
const radius = 10;
const hypotenuse = Math.sqrt(x ** 2 + y ** 2);

hypotenuse <= radius ? alert('Точка внутри окружности') : alert('Точка за пределами круга');