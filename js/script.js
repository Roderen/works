'use strict';
(function () {
  const form = document.querySelector('#form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = {};

    const input = form.querySelectorAll('.form-control');
    const select = form.querySelector('.form-select');
    const checkbox = form.querySelector('.form-check-input');
    input.forEach((item) => {
      if (item.value === '') return;
      result[item.name] = item.value;
    });

    if (select) {
      result[select.name] = select.options[select.selectedIndex].text;
    }

    if (checkbox) {
      if (checkbox.checked) result[checkbox.name] = checkbox.value;
    }
    console.log(result);
  });
}());
