/**Exercise 2: Create a JavaScript Class containing the following methods:
1- Create a method that returns True when a given number is prime
2- Create a method that returns the sum of the first 100 prime numbers (e.g., use a loop)
3- Make a method that takes a Celsius from its arguments and covert that Fahrenheit and vice versa.
4- Create a method that returns the average of the numbers in an array of numbers
 */

class Math {
  isPrime(n) {
    if (n < 2) {
      return false;
    } else {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    }
  }

  sumPrimes() {
    let sum = 0;
    let num = 100;
    for (let i = 2; i < num; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
        }
      }
      if (isPrime) {
        sum += i;
      }
    }
    return sum;
  }
}

let num = new Math();
console.log(num.isPrime(2));
console.log(num.isPrime(4));
console.log(num.isPrime(7));
console.log(num.isPrime(9));
console.log(num.sumPrimes());
