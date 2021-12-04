function passwordStrength(userPassword) {
    let regexPassword = /(?=.*^[a-zA-Z])(?!.*(\s))(?=.*(\w|\W))(?!.*(\s)).{2,16}$/;
    return regexPassword.test(userPassword);

}


 console.log(passwordStrength("avbcdefg"));            //true
 console.log(passwordStrength("a*bcdefg"));            //true
 console.log(passwordStrength("1password"));           //false
 console.log(passwordStrength("p"));                   //false
 console.log(passwordStrength("pa"));                  //true
 console.log(passwordStrength("passwerdcfvbghnmj"));   //false as more thn 16
 console.log(passwordStrength("passwerdcfvbghnm"));    //true
console.log(passwordStrength("pa ghnm"));              //false
 console.log(passwordStrength(" a*bcdefg"));            //false


 //2- Password must start with an uppercase character followed by a combination of alphanumeric 
 //characters with a minimum length of 8 characters and a maximum length of 25. (edited) */


function passwordStrength1(userPassword) {
  let regexPassword = /(?=.*^[A-Z])(?=.*(\w|\W)).{8,25}$/; 
  return regexPassword.test(userPassword);
}
console.log('-----------------------------');
console.log(passwordStrength1('A1bghfde4%nhns'));
console.log(passwordStrength1('asbjkfbek'));
console.log(passwordStrength1('asdfh'));
console.log(passwordStrength1('jbd dwhjb'));
console.log(passwordStrength1("Test2021?"));