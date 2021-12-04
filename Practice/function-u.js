// function myFun() {
//   console.log("Hello");
//   return "World";
//   console.log("byebye");
// }
// myFun();

// function shout(string){
//   let result = string + string;
//   console.log(result);
//   return result;
// }
// shout('fire');
// shout('run');

// function firstchar(input){
// let abc = input.trim();
// return abc.charAt(0);
// }
// console.log(firstchar('  hbcjdb  '));

// function firstChar(text) {
//   let trimmedText = text.trim();
//   return trimmedText.charAt(0);
// }
// console.log(firstChar('  dbujsgd '));

// function indexOfIgnoreCase(s1, s2) {
//   let s1Lower = s1.toLowerCase();
//   let s2Lower = s2.toLowerCase();
//   return s1Lower.indexOf(s2Lower);
// }
// console.log(indexOfIgnoreCase('brit', 'Is'));

/*Write a function repdigit that determines whether a two-digit decimal is a repdigit or not.
 If the decimal is a repdigit, 'Repdigit!' should be returned, otherwise 'No Repdigit!'.
Example: repdigit(22) should return 'Repdigit!' and repdigit(23) should return 'No Repdigit!'. */
/*function repdigit(n) {
  let ones = n % 10;
  let tens = Math.floor(n / 10);
  if (ones === tens) {
    return "Repdigit!";
  }
  return "No Repdigit!";
}

console.log(repdigit(44));

function getFirstElement([a,b]){
  let myArr = [a,b];
  return myArr[0];
}
console.log(getFirstElement([5,0,1,2]));

function rotate(anArray){
  let element0=anArray.shift()
}

anArray = ['a','b','c'];
let x = anArray.shift();
console.log(x);
anArray.push(x);
console.log(anArray);

function list(words) {
  if (words.length === 0) {
    return "";
  }

  if (words.length === 1) {
    return words[0];
  }
  let wordsExLast = words.slice(0, words.length - 1);
  let lastWord = words[words.length - 1];
  return wordsExLast.join(", ") + " and " + lastWord;
} */

let s = ['kinju', 'nayan','myshu'];
let wordsExLast = s.slice(0,s.length-1);
console.log(wordsExLast);
  let lastWord =s[s.length - 1];
console.log(lastWord);

function mean(anArray) {
  let sum = 0;
  for (let i = 0; i < anArray.length; i++) {
    sum = sum + anArray[i];
  }
  return sum / anArray.length;
}

