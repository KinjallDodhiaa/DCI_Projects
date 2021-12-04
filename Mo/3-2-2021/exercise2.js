function checkAccount() {
  let userEmail = document.getElementById("exampleInputEmail1").value;
  let userPassword = document.getElementById("exampleInputPassword1").value;
  if (userEmail == "admin@dci.org" && userPassword == "Test2021?") {
    window.open("http://www.w3schools.com");
  } else {
    return alert(" Get out of here ....!!!");
  }
}
function emailFormatVerification() {
  let userEmail = document.getElementById("exampleInputEmail1").value;
  let regexEmail = /\S+@+\S+\.+\S+/;
  if (regexEmail.test(userEmail) == true) {
    return alert("Perfect Email!");
  } else {
    return alert("Wrong Email Format!!");
  }
}
function passwordFormatVerification() {
  let userPassword = document.getElementById("exampleInputPassword1").value;
  let regexPassword = /(?=.*^[A-Z])(?=.*(\w|\W)).{8,25}$/;
  if (regexPassword.test(userPassword) == true) {
    return alert("strong password");
  } else {
    return alert("week password!! choose another one");
  }
}

// function checkAccount() {
//   let varInputEmail = document.getElementById("exampleInputEmail1").value;
//   let varInputPassword = document.getElementById("exampleInputPassword1").value;

//   if (varInputEmail == "admin@dci.org" && varInputPassword == "Test2021?") {
//     return alert("Welcome to the DCI admin panel!!! :) ");
//   } else {
//     return alert(" Get out of here ....!!!");
//   }
// }

// function emailFormatVerification() {
//   let userEmail = document.getElementById("exampleInputEmail1").value;
//   let regexEmail = /\S+@+\S+\.+\S+/;

//   if (regexEmail.test(userEmail) === true) {
//     return alert('welcome');
//   } else {
//     return alert("invalid Email");
//   }
// }

// function passwordStrength() {
//   let userPassword = document.getElementById("exampleInputPassword1").value;
//   let regexPassword = /(?=.*^[A-Z])(?=.*(\w|\W)).{8,25}$/;

//   if (regexPassword.test(userPassword) === true) {
//     return alert('strong password');
//   } else {
//     return alert("invalid password");
//   }
// }
