function myFocus(inp) {
  inp.style.background = "yellow";
}

function  namesToUpperCase() {
var firstname = document.getElementById("firstname").value 
var familyname =document.getElementById("familyname").value
var regex= /^[A-Z]/
    if(firstname===''||familyname===''){
      alert('First Name and <famil name cant be blank')
      return;
    }
    else if(regex.test(firstname)===false || regex.test(familyname)=== false ){
     alert ("first letter in first and last name should be uppercase");
     return;
    }
}


   function emailFormatVerification() {
     let userEmail = document.getElementById('email').value;
     let regexEmail = /\S+@+\S+\.+\S/;
     if(userEmail ===''){
       alert('email is required');
       return;
     }
     else if(regexEmail.test(userEmail)){
       alert('The format of email id is wrong.');
       return;
     }
   }

  function checkPhoneFormat(){
    let phoneNumber = document.getElementById('phonenumber').value;
    //let regexNumber = /[0-9]*\/*(\+49)*[ ]*(\([0-9]+\))*([ ]*(-|–)*[ ]*[0-9]+)*/g;
    //let regexNumber = /(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/;
    let phoneRegex = /[+]+[49]+[0-9]{10}/;

    if(phoneNumber===''){
      alert('Please give your phonenumber');
      return;
    }
    else if(!regexNumber.test(phoneNumber)){
      alert('The format of phone number is not right');
      return;
    }
  }


//https://www.w3resource.com/javascript/form/javascript-sample-registration-form-validation.php