/**1 - Write a simple JavaScript function that takes a pair of username and password(window.prompt) from a user
 * (e.g., username = admin, password = 123),
2 - if that was correct shows a welcome message, otherwise shows a warning message
3 - Then when the username or password was wrong shows a message box asking  "are you willing to enter a new username or password?"" 
 (window.confirm) */

  //  let userName = prompt("username please", "");
  //  if (userName === "admin") {
  //    let password = prompt("Password please", "");

  //    if (password === '123') {
  //      alert("Welcome!");
  //    } else if (password === "" || password === null) {
  //      alert("Canceled");
  //    } else {
  //      alert("Warning message");
  //      confirm("are you willing to enter a new username or password?");
  //    }
  //  } else if (userName === "" || userName === null) {
  //    alert("Canceled");
  //  } else {
  //    alert("I don't know you");
  //  }

  let userName = prompt("username please");
  if (userName === "admin") {
    let password = prompt("password please");

    if (password === "123") {
      alert("Welcome");
    } else {
      alert("warning-your password is wrong");
      if(confirm("are you.............")){
        userName = prompt('username please');
        password=prompt('password please');

        if(userName==='admin'&&password==='123'){
          alert('Welcome');
        }else{
          alert('warning-your password i wrong')
        }
      };
    }
  } else {
    alert("I don't know you");
  }


//  function verifyAccount(){
//  let username = prompt('Username please:');
//  let password = prompt('password please');
//  if(username==='admin'&&password==='123'){
//    document.getElementById('demo').innerHTML='welcome'
//  } else {
//    document.getElementById('demo').innerHTML='wrong'
//    confirm('Are you....................')
//  }
//  }

// function login(){
//   let username;
//   let password;

//   username=prompt('Username please:');
//   password=prompt('Password please');

//   if(username==='admin'&&password==='123'){
//     alert('Welcome');
//   }else{
//     alert("That's wrong!");

//     if(window.confirm('are you............')){
//       username=window.prompt('Username please:');
//       password=window.prompt('Password please');

//       if(username==='admin'&&password==='123'){
//         alert('Welcome');
//   }else{
//     alert("That's wrong!");

//       }
//     }
//   }
// }