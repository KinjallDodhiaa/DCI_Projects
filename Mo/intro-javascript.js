//"use strict" many companies use this use strict to not get any error so it means u have to define every variable like var unlike hoisting

var AccountMoney = 100;
var AccountHolder = "Kinjal";
var AccountIBAN = "DE12-1234-1234-1234";

AccountMoney = 500; //If we want to change something in variable like instead of AccountMoney 100 now we got 500 thn u just write the name of the variable like accountmoney and no need to mention var AccountMoney

console.log(AccountMoney); //by doing console.log and write a variable name inside it will show u the value of that var ex: AccountMoney value is 500

var InstituteName = "DCI";
var CourseName = "Web Development Program";
//var Professors = "Mo & Marko";
var ProfessorName1 = "Mo";
ProfessorName2 = "Marko";
//var StudentName1 = "Kinjal";
//var StudentName2 = "Sara";
//var StudentName3 = "Mariana";
var StudentsName = "Kinjal\n Sara\n Mariana";
var Hobbies = "music \n travelling";
Age = 33;
var Age;
let Age; //Hoisting
let _ = 2; //it will work without error if u use _
//var Hobbies; this will come undefined value
//let Hobbies; u will get error and thn u have to change to var and then u will no get error. To execute let u always need to assign value
//Hobbies = "sports"; by default this calculate var or let without mentioning it.
//instead of var we can also use let example
//let return, fuction, var, let, for are alll reserved and u cannot use it. it will show error

const MOBILEPHONE = 0976566; //when u want a fix value that should never change, thn we have to use constant. In constant u have to give a value immediately.
const PIE = 3.14; //const are always written in uppercase as a professional
console.log(InstituteName);

StudentName1 = "Kinjal Dodhia";
console.log(StudentsName);
console.log(ProfessorName2);
console.log(Hobbies);
console.log(PIE);
console.log(Age);
