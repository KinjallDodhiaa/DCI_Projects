// extract the language name from a given URL and shows a welcome message in that language.
// For instance, a given URL is : http://DCI.org/@german     --> herzlich willkommen bei DCI   , when there is no input default language English

function WelcomeMessage(strURL) {
  let lang = strURL.split("/").pop().slice(1);
  let outputMessage;

  switch (lang) {
    case "german":
      outputMessage = "herzlich wilkommen bei DCI";
      break;
    case "Japanese":
      outputMessage = "ようこそ";
      break;
    default:
      outputMessage = "Welcome";
  }
  return outputMessage;
}
console.log(WelcomeMessage("http://DCI.org/@Japanese"));

// "A palindrome is a word, number, phrase, or other sequences of characters which reads the same backward as forward, such as madam, racecar."-- Wikipedia
//1- Write a function that controls whether its argument is a palindrome (return true) or not (return false).

let word = "madam"

if()