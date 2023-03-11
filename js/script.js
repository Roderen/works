"use strict";

function equals(a, b) {
  console.log(Boolean(a === b));
}
equals(1, 1);

function compare(a, b) {
  console.log(Boolean((a + b) > 10))
}
compare(1, 1)

function checkBoolean(a) {
  console.log(Boolean(a < 0))
}
checkBoolean(-1);



// function equals(a, b) {
//   if (a === b) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }
// }
// equals(1, 1);
//
// function compare(a, b) {
//   if (a + b > 10) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }
// }
// compare(1, 1)
//
// function checkBoolean(a) {
//   if (a < 0) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }
// }
// checkBoolean(-1);