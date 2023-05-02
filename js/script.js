"use strict";
(function () {
  const info = {
    name: 'Vova',
    age: '26',
  }

  function fn(surname) {
    return `${this.name}, ${this.age}, ${surname}`;
  }

  function myBind(fn, context, ...rest) {
    return function () {
      return fn.apply(context, rest);
    }
  }

  const result = myBind(fn, info, 'Shaitan');
  console.log(result());
})();