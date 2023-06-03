"use strict";
(function () {
  const user = {
    data: {
      a: 1,
      b: 2,
      c: 3,
      d: {
        a1: 1,
        b1: 2,
        c1: 3,
        d1: {
          a2: 3,
          b2: 3,
          c2: 3,
        },
      },
    },
  };

  const deepFreeze = (data) => {
    Object.keys(data).forEach((item) => {
      if (typeof item === "object" && item !== null) deepFreeze(item);
    });
    return Object.freeze(data);
  };
  deepFreeze(user);
}());
