/*Palindrome Challenge

What is Palindrome?

"A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, 
such as madam, racecar."-- Wikipedia

PROBLEM: 
1- Write a function that controls whether its argument is a palindrome (return true) or not (return false).
2- Rewrite the function with function expression.
3- Instead of the argument variable, use rewrite your function (and expression) with a global variable.
*/

// function isPalindrome(str) {
//   if (str === str.split("").reverse().join("")) {
//     return "It is a palindrome";
//   } else return "not a palindrome";
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("nayan"));
// console.log(isPalindrome("kinjal"));
// console.log(isPalindrome("sara"));

// function isPalindrome(str) {
//   let string = `your word ${str} is palindrome`;
//   let wordlength = str.length;
//   for(let i=0; i<wordlength/2; i++){
//     if(str.charAt(i)!==(str.charAt(wordlength-i-1))){
//       string = `your word ${str} is not a palindrome`;
//      }
//     }
//     return string;
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("Kinjal"));
// console.log(isPalindrome("Nayan"));
// console.log(isPalindrome("racecar"));

/*function palindrome(str) {
  let string = `Your word \"${str}\" is a palindrome`;
  let wordLength = str.length;
  for (let Index = 0; Index < wordLength / 2; Index++) {
    if (str.charAt(Index) !== str.charAt(wordLength - Index - 1)) {
      string = `Your word \"${str}\" is not a palindrome`;
    }
  }
  return string;
}*/

function isPalindrome(str) {
  let wordlength = str.length;
  for (let index = 0; index <= wordlength / 2; index++) {
    if (str.charAt(index) !== str.charAt(wordlength - index - 1)) {
      return `${str} is not a palindrome`;
    } else return `${str} is a palindrome`;
  }
}
console.log(isPalindrome("madrsam"));
console.log(isPalindrome("kinjal"));
console.log(isPalindrome("naghyan"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("mysha"));
console.log(isPalindrome("class"));

madam

