"use strict";
(function () {
  const createTable = () => {
    const table = document.createElement("table");
    const tableBody = document.createElement("tbody");

    for (let i = 0; i < 10; i++) {
      const tableTr = document.createElement('tr');

      for (let j = 1; j < 11; j++) {
        const tableTd = document.createElement('td');
        const tableText = document.createTextNode(`${i * 10 + j}`);
        tableTd.appendChild(tableText);
        tableTr.appendChild(tableTd);
      }
      tableBody.appendChild(tableTr);
    }
    table.appendChild(tableBody);
    return table;
  }
  document.body.appendChild(createTable());
})();