"use strict";

const fid = (n = 1) => {
  let prev = 0;
  let next = 1;
  for(let i = 0; i < n; i++){
    next = prev + next;
    prev = next - prev;
  }
  return prev;
};
console.log(fid(100));