"use strict";
(function () {
  function counter(number = 0) {
    const resultCounter = {
      increase: 0,
      decrease: 0,
      value: 0,
    };

    return {
      increase() {
        number++;
        return resultCounter.increase++;
      },
      decrease() {
        number++;
        return resultCounter.decrease--;
      },
      value() {
        resultCounter.value++;
        return number;
      },
      getStatistic() {
        return resultCounter;
      },
      reset() {
        for (const key in resultCounter) {
          resultCounter[key] = 0;
        }
        number = 0;
        return resultCounter;
      },
    };
  }
  const result = counter();
  console.log(result);
})();
