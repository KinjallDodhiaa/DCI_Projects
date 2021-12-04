let username = "Kinjal";
let password = "abc123";
let accountBalance = 100000;
let TanCode;

if ((username==="Kinjal")&&(password==="abc123")){
    TanCode = Math.random() * 1000; // generates a ßrandome number
    TanCode = parseInt(TanCode);
    console.log(`welcome to our online banking. Please enter tancode ${TanCode}`);  
} else{console.log("username or password is invalid");}

let number = 35.30;
console.log(Math.ceil(number));
console.log(Math.floor(number));
console.log(Math.round(number));

