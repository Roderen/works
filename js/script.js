'use strict';
(function () {
  const arr = [1, 2, [1.1, 1.2, [10, 11], 1.3], 3];
  function generateList(array) {
    const list = document.createElement('ul');

    array.forEach((item) => {
      const listItem = document.createElement('li');
      let listItemText = document.createTextNode(item);

      if (Array.isArray(item)) listItemText = generateList(item);

      listItem.appendChild(listItemText);
      list.appendChild(listItem);
    });
    return list;
  }

  document.body.appendChild(generateList(arr));
}());
