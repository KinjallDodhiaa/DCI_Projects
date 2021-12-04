// extract the language name from a given URL and shows a welcome message in that language.
// For instance, a given URL is : http://DCI.org/@german     --> herzlich willkommen bei DCI   ,
// when there is no input default language English

"use strict";

function welcomeMessage(strURL) {
  let lang = strURL.split("@").pop();
  if (lang === "german") {
    return "Herzlich willkommen";
  } else if (lang === "japanese") {
    return "DCIへようこそ";
  } else if (lang === "persian") {
    return "خوش آمدید";
  } else return "Welcome to DCI";
}
console.log(welcomeMessage("http://DCI.org/@german"));
console.log(welcomeMessage("http://DCI.org/@japanese"));
console.log(welcomeMessage("http://DCI.org/@persian"));
console.log(welcomeMessage("http://DCI.org/@chinese"));
