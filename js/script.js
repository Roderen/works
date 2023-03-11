"use strict";

function calculateHours() {
  const hours = parseInt(prompt('Количество часов:'));

  const calculateSeconds = hours * 60 * 60;
  console.log(calculateSeconds);
}
calculateHours();