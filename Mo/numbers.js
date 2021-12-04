"use strict"

let Username = "Kinjal";
let Password = "ABC123";
let AccountBalance = "$99999"
let TanCode;

if(Username="Kinjal" && Password=="ABC123"){
    TanCode=Math.random()*1000; //generates a random number
    TanCode=parsInt(TanCode);
    TanCode = Math.random()*1000;
    
    console.log(`Welcome to online banking. \n For further operations please enter this TanCode: ${TanCode}`);
}else {
    console.log("get out of here");
}

let InputTan=2223;
if (InputTan==TanCode)
{
    console.log(AccountBalance);
}
else {
    console.log("Your TanCode is Wrong")
}

let Price=35.99;
console.log(Math.ceil(Price));//it will round of the fraction like 35.99 it will give 36, 35.40= 36. Even a small fraction is given than it will round up
console.log(Math.floor(Price));//it will round up but the same number like 35.50 is 35 and so on

console.log(Math.max(1,4,5,9,12)); //gives us biggest number
console.log(Math.min(1,3,4,5,6,)); //gives min num