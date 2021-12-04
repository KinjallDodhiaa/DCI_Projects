//In regular expression the variable should start from /'anything in between'/

//let regexPattern = /a/; //return false because there is no a
//let regexPattern = /O/i; //case insensitive so capital O will return true
//let regexPattern = /\d/ or /\w/; //return true in both case and it is for only numbers
//let regexPattern = /[^1-9]/; //for not numbers
//let regexPattern = /\ thn it will return true because it is non digits

//console.log(regexPattern.test(' Hello World ')); //test allows to test the regex if it is true or false
//console.log(regexPattern.test(' I have 2 laptops and 5 phones'));

let regexPattern1=/[a-z]/;
//console.log(regexPattern1.test('This is a TEST')); // return true because there are few letters in small letters

function emailFormatVerification(userEmail){
    let regexEmail = /\S+@+\S+\.+\S/;
    return regexEmail.test(userEmail);//
 
}

console.log(emailFormatVerification('test @gmail.com'));
console.log(emailFormatVerification("kinjal_dodhia@yahoo.com"));
