let BookDescription =
  "this is a special 'title' .  \n this is another sentence.";

  console.log(BookDescription);

  let Booktitle = "Learn Javascript in 20 days.       ";
  let Booktitle2 ="This is a self learning process";

  console.log(Booktitle.trim()+Booktitle2);
  let Filterkey = "Javascript"
  Filterkey=Filterkey.toLowerCase()
  Booktitle=Booktitle.toLowerCase();

  if(Booktitle.includes(Filterkey)===true)
  console.log("I want to buy book");
  else{console.log("i dont want to buy the book");}

  let number1 = 14;
  let number2 = 15;
  let strgMessage = `This is a placeholder and it returns the value like this ${number1+number2}`;
  console.log(strgMessage);

  let userName="Kinjal"
  let Email = "kinjal_shah@dispatchEvent.org";
  let MobileNumber="017643324547767836836489";
  let strmsg;
  MobileNumber=MobileNumber.substring(0,12);
  console.log(MobileNumber);

  if (MobileNumber.length != 12){
      console.log("Invalid number");
  }else {console.log(`Hey ${userName} welcome to our website. This is your Email adress :${Email}`);}

let lastIndex = userName.length-1;
console.log(lastIndex);
let firstChar = userName[2];
let lastChar = userName[userName.length-1];
console.log(firstChar);
console.log(lastChar);
let password = "ABC123";
let userInputPassword = "abc123";

if(password.toUpperCase()===userInputPassword.toUpperCase()){
    console.log("welcome to our website");
}else {console.log("the password you gave is incorrect");}

let a ="Hello World";
let b = a.substring(2,8);
console.log(b);

let name = "Kinjal";

