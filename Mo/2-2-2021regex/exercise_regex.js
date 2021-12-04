/**Write a function for checking input password strongness, so your functions must include the following features and return true or false:
1- The first character must be an alphabet character such as a to z or A to Z
2- After the first character, a password can contain any other alphanumeric characters as well as special characters such as *,?,!, etc.
3- The length of a password must be in the range of 2 to 16 characters
4- There must not be any space in a password, so when there is space, you need to remove it (hint: use regex with the replace method)
5- (Optional) use your function in an HTML form to evaluate the input password text; when your function returns false, your webpage will show an alert()
 */

function passwordStrength() {
  let userPassword = document.getElementById("exampleInputPassword1").value;
  let regexPassword = /(?=.*^[a-zA-Z])(?!.*(\s)(?=.*(\w|\W))(?!.*(\s).{2,16}$/;
  if (regexPassword.test(userPassword) === true) {
    return alert("valid password");
  } else {
    return alert("invalid password");
  }
}

// console.log(passwordStrength("avbcdefg"));            //true
// console.log(passwordStrength("a*bcdefg"));            //true
// console.log(passwordStrength("1password"));           //false
// console.log(passwordStrength("p"));                   //false
// console.log(passwordStrength("pa"));                  //true
// console.log(passwordStrength("passwerdcfvbghnmj"));   //false as more thn 16
// console.log(passwordStrength("passwerdcfvbghnm"));    //true
// console.log(passwordStrength("pas swer"));    //true
