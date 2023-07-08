"use strict";
(function () {
  class Hamburgers {
    constructor(size, stuffing) {
      this.size = size;
      this.stuffing = stuffing;
      this.moreStuffing = {
        price: 0,
        calories: 0,
      };
    }

    static SIZE_SMALL = {
      price: 50,
      calories: 20,
    };

    static SIZE_BIG = {
      price: 100,
      calories: 40,
    };

    static STUFFING_CHEESE = {
      price: 10,
      calories: 20,
    };

    static STUFFING_SALAD = {
      price: 20,
      calories: 5,
    };

    static STUFFING_POTATO = {
      price: 15,
      calories: 10,
    };

    static TOPPING_SEASONING = {
      price: 15,
      calories: 0,
    };

    static TOPPING_MAYO = {
      price: 20,
      calories: 5,
    };

    get calculatePrice() {
      return this.size.price + this.stuffing.price + this.moreStuffing.price;
    }

    get calculateCalories() {
      return this.stuffing.calories + this.stuffing.calories + this.moreStuffing.calories;
    }

    addTopping(topping) {
      this.moreStuffing.price += topping.price;
      this.moreStuffing.calories += topping.calories;
    }
  }

  const hamburger1 = new Hamburgers(Hamburgers.SIZE_SMALL, Hamburgers.STUFFING_CHEESE);
  console.log(`Цена: ${hamburger1.calculatePrice}, Калории: ${hamburger1.calculateCalories}`);
  hamburger1.addTopping(Hamburgers.TOPPING_MAYO);
  console.log(`Цена: ${hamburger1.calculatePrice}, Калории: ${hamburger1.calculateCalories}`);
}());
