"use strict";

function countdown(number) {
  for (let index = number; index > 0; index--) console.log(index);
}

function countDown(number) {
  console.log(number);
  const countDownNumber = number - 1;
  if (countDownNumber > 0) countDown(countDownNumber);
}

countdown(6);
countDown(10);

function Factorial1(number) {
  // iterative solution
  let intFactorial = number;
  for (
    let index = number - 1;
    index > 1;
    index-- // index=2, 1
  )
    intFactorial = intFactorial * index; //intFactorial=4*3 ,  intFactorial = 12 *2 , intFactorial= 24

  return intFactorial;
}

function factorial(number) {
  let intFactor = number;
  for (let index = number - 1; index >= 1; index--)
    intFactor = intFactor * index;
  console.log(intFactor);
}
factorial(5);

function Factorial(number) {
  if (number === 0) return 1;
  else return number * Factorial(number - 1);
}
console.log(Factorial(5));
