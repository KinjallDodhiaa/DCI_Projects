"use strict";

// function countdown(number){
//     for(let index=number; index>0;index--){
//         console.log(index);
//     }
// }

//countdown(10);

function countDownRecursive(number) {
  console.log(number);
  number = number - 1;

  if (number > 0) countDownRecursive(number);
}
//countDownRecursive(10);

function countDown(n) {
  console.log(n);
  n = n + 1;
  if (n <= 10) countDown(n);
}
countDown(1);

