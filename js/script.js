"use strict";
(function () {
  const data = ["a", "b", "c"];

  function MyIterator(arr) {
    let index = 0;
    let obj = {
      value: undefined,
      done: false,
    };

    function iter() {
      if (index < arr.length) {
        obj.value = arr[index++];
        return obj;
      }
      obj = {
        value: undefined,
        done: false,
      };
      return obj;
    }

    return iter;
  }

  const result = MyIterator(data);
  console.log(result());
  console.log(result());
  console.log(result());
  console.log(result());
}());
