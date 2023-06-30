"use strict";
(function () {
  const player1 = { id: 1, name: 'Иван', level: 10 };

  const addPlayerToLevelSet = (obj) => {
    const ws = new WeakSet();
    ws.add(obj);

    return ws;
  }
  console.log(addPlayerToLevelSet(player1));
})();