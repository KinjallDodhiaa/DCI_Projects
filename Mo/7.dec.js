"use strict"

//strings

let bookDescription = "this is a sentence. \n this is another sentence";

let bookDescription2 = "this is a sentence. \"title\". \n this is another sentence"; //this is to use write something in a sentence in inverted comas

let number1 = 14;
let number2 = 17;
let strMessage = `This is the result of the calculation : ${number1+number2} the rest of strings`; //to calculate use backstick ``. Template literals
let username = "Sara";
let emailAddress = "sara@dci.org";
let stringMessage = `Hey ${username} Welcome to our website! \n This is your email address :${emailAddress}`; //backstick in template literals
let strLength = stringMessage.length; //to see the length of the string. example phone number...
//let phoneNumber = "017286765674";

let username2 = "Testusernameblah";
let LastChar = username2.length;
let LastIndex = username2[username2.length-1];
//console.log(username2);
//console.log(LastIndex);  

/* if (phoneNumber.length!=13)
console.log("This is invalid number");
else {
  let stringMessage = `Hey ${username} Welcome to our website! \n This is your email address :${emailAddress}`; //backstick in template literals
} */
let Username = "Kinjal";
let EmailAddress = "kinjal@xyz.com";
let MobilePhoneNumber = "017684954400";
let StrMessage;
if (MobilePhoneNumber.length != 12) {
  StrMessage =
    "This mobile phone number is INVALID!!!! \n  Get out of here... ";
} else {
  StrMessage = `Hey ${Username} Welcome to our website!  \n  This is your email: ${EmailAddress}`; //backstick in template literals
}
console.log(StrMessage);

let Password = "ABC123";
let UserInputPassword = "abc123";
if (Password.toUpperCase() == UserInputPassword.toUpperCase()) {
  // "ABC123"
  console.log("This is correct!");
} else {
  console.log("This is incorrect!!!!!");
}


let Username3 = "Nayan";
let emaiid = "nayan@xyz.com";
let message;
let mobilePhoneNumber = "017643380847";
if (mobilePhoneNumber.length !=12){
    message = "incorrect";
}
else {
    message = "welcome";
}
console.log(message);




//console.log(bookDescription);

//console.log(bookDescription2)
//console.log(strMessage);
//console.log(stringMessage);
//console.log(strLength); 

let StrSimpleMainString = "Hello World!";
let StrSimpleSubString = StrSimpleMainString.substr(0,2/*StrSimpleMainString.length-1*/);
console.log(StrSimpleSubString);

let BookTitle = "Learning Javascript in 3 Days!";
console.log(BookTitle.includes("Javascript"));
console.log(BookTitle.includes("Python"));

let Filterkey = "Javascript"

BookTitle = BookTitle.toLowerCase();

/*if (BookTitle.includes("Javascript")==true){
    console.log("I want to buy this book");
}
else {
    console.log("I dont want to buy");
}*/
if (BookTitle.includes(Filterkey.toLowerCase())==true){
    console.log("i want to buy");
}
else {
    console.log("i dont want to buy");
}

let BookAuthor = "    Shakespeare";
console.log(BookAuthor.trim());

let Example ="Hello"
let Char = Example[2];// when we use substring(2,3)

