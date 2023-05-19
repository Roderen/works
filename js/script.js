'use strict';
(function () {
  const form = document.querySelector('#form');
  const dataKey = 'formData';

  if (form) {
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
      localStorage.setItem(dataKey, JSON.stringify(result));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const formResult = document.querySelector('.form-result');

    if (formResult) {
      if (!localStorage.getItem(dataKey)) return alert('No data');
      const result = JSON.parse(localStorage.getItem(dataKey));
      const ul = document.createElement('ul');
      Object.entries(result).forEach(([key, value]) => {
        const li = document.createElement('li');
        li.innerText = `${key}: ${value}`;
        ul.appendChild(li);
      });
      formResult.appendChild(ul);
    }
  });
}());
