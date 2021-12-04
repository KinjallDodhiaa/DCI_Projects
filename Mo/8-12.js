'use strict'

console.log(String.fromCharCode(65)+String.fromCharCode(66));

//ABC....XYZ
for(let Index = 65; Index <=90; Index++)
console.log(String.fromCharCode(Index));

let Company = "Apple is a software company"
console.log(Company.replace("Apple","Microsoft"));

console.log(Company + ",but it is not the best one.")
console.log(Company.concat(",but it is not the best one."));

let strNews = "Today's we are happy to annoucne that Apple has been chosen as the best software company in the world, Apple offers software with blockchain!";
let strKeyword = "Apple"
let StartIndex = strNews.indexOf(strKeyword);
let LastIndex = strNews.lastIndexOf(strKeyword);
console.log(StartIndex);
console.log(LastIndex);

let strOutput = '';
for (let Index = StartIndex + strKeyword.length; Index < LastIndex; Index++) 
{
  strOutput = strOutput.concat(strNews.charAt(Index));
}
console.log(strOutput);
//Replace

/* let Company ="Apple is a software company";
console.log(Company);
console.log(Company.replace("Apple","Microsoft"));

console.log(Company+",but it is not the best one");
console.log(Company.concat(",but it is not the best one"));
Company=Company.concat(",but it is not the best one");
console.log(Company);

let Bank="CommerzBank"
console.log(Bank);
Bank=Bank.replace("CommerzBank","PostBank");
console.log(Bank); */

/* let strNews =
  "Today's we are happy to annoucne that Apple has been chosen as the best software company in the world, Apple offers software with blockchain!";
let strKeyword = "Apple";

let StartIndex = strNews.indexOf(strKeyword);
let LastIndex = strNews.lastIndexOf(strKeyword);

// Editor part

let StrOutput = ""; // This is a string
for (let Index = StartIndex + strKeyword.length; Index < LastIndex; Index++) {
  StrOutput = StrOutput.concat(strNews.charAt(Index));
}
console.log(StrOutput);

console.log('console log is a function!');
let strJScode="console.log(";
let strJScodez= "'console log is a function!');";
eval(strJScode+strJScodez); */

//split()method

  /* let strNews =
     "Today's we are happy to annoucne that, Apple has been chosen as the best software company in the world, Apple offers software with blockchain!";
   let ArrNews = strNews.split(" "); //delimiter
   console.log(ArrNews);

   if (ArrNews.length <= 50) {
     console.log(
       `Your proposal is accepted because its length is ${ArrNews.length}`
     ); // placeholder inside of backstick
   } else {
     console.log("Your submission must be less than 50 words!");
   } */

   