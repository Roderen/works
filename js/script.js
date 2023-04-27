"use strict";
(function () {
  const list = document.querySelectorAll('.ulClass li');

  // #1
  for (let i of list) {
    console.log(i);
  }

  // #2
  console.log(list.length);

  // #3
  const arr = [];
  list.forEach(item => {
    arr.push(item.innerText);
  })
  console.log(arr);
})();