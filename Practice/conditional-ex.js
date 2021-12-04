'use strict'

//3. Declare the variables a, b and c, and give them number values. 
//Check which one out of the three variables has the largest value and print it to the console. 
//Then change the values of the variables to see if your conditional still works.

let a = 40;
let b = 80;
let c = 30;

let largestValue = Math.max(a,b,c);
console.log(largestValue);
if(a>b && a>c){
    console.log(`${a} is the largest value`);
}else if(b > c){
    console.log(`${b} is the largest value`);
}else {
    console.log(`${c} is the largest value`);
}

//4.Create a new string adding "Py" in front of a given string.
// If the given string begins with "Py" then print the original string.

let givenStr = 'Pyramid';
let newStr = 'Py'+givenStr;
let first2Char = givenStr.charAt(0) + givenStr.charAt(1);
if(first2Char==='Py'){
    console.log(givenStr);
}else {console.log(newStr);
}




