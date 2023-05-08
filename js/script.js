"use strict";
(function () {
  const attrList = document.querySelector('.ulClass');
  const lastItem = document.querySelector('.ulClass li:last-child');
  const firstItem = document.querySelector('.ulClass li:first-child');

  // #1
  const arrAttrValues = [];
  const arrAttrNames = [];
  for (let i of attrList.attributes) {
    arrAttrValues.push(i.nodeValue);
    arrAttrNames.push(i.nodeName);
  }
  console.log(arrAttrValues);
  console.log(arrAttrNames);

  // #2
  lastItem.innerText = 'Привет, меня зовут Максим';

  // #3
  firstItem.setAttribute('data-my-name', 'maksym');

  // #4
  attrList.removeAttribute('data-dog-tail');
})();