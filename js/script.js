"use strict";
(function () {
  const cost = () => {
    const amountPotato = 4;
    const potatoWeight = 75;
    const liters = 48;
    const perKg = 13;
    return Math.ceil(amountPotato * potatoWeight * liters / 1000 * perKg)
  }
  console.log(cost());
})();