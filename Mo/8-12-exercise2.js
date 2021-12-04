'use strict'
/* let Abstract = '"The Secret" book author is "Rhonda Byrne". It is a self help book. It is based on law of attraction which says ask,believe and receive'
let ArrNews = Abstract.split('"Rhonda Byrne"');
console.log(ArrNews);
if (ArrNews.length<=10){
    console.log(`It is accepted because it is ${ArrNews.length}`)
}
else{
    console.log(`It is rejected as it is more thn ${ArrNews.length}`)
} */

let strInput =
  "Author: Rhonda Byrne, Abstract: Hi this is fake abstract. Good Luck!;"

  let ArrNews = strInput.split("Rhonda Byrne");
  console.log(ArrNews);
  if (ArrNews.length<=10) {
      console.log('It is accepted');
  }else {
      console.log(rejected);
  }
