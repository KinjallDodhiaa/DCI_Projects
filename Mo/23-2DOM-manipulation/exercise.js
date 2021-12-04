//* Change the font of the body element.
document.querySelector("body").style.font = "normal 1rem arial,serif";

//* Center the text of h1 on the page.
document.querySelector("h1").style.textAlign = "center";

let mainSection = document.getElementById('mainId');
mainSection.style.display = 'flex';
mainSection.style.justifyContent = 'space-around';
mainSection.style.flexFlow = 'row wrap';
mainSection.style.boxSizing = "border-box";

//* The menu headings have a class named `category`. Select the elements by class name. Then, change the `color` and `font-style` of each element.
let category = document.getElementsByClassName("category");

for (let i = 0; i < category.length; i++) {
  category[i].style.color = "blue";
  category[i].style.font = "italic bold 1.5rem arial,serif";
  category[i].style.textDecoration = "underline";
}

//* Create a function named "_colorGenerator_" that returns a different color. The returned random color should also include set transparency.
//Select the unordered lists with the class of `food-category`. Give each list a different background color using the function that you created.

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ",0.2)";
  console.log(bgColor);

  document.body.style.background = bgColor;

  let foodCategory = document.getElementsByClassName("food-category");
  foodCategory[0].style.backgroundColor = "rgb(221, 161, 221)";
  foodCategory[1].style.backgroundColor = "rgb(240, 128, 128)";
  foodCategory[2].style.backgroundColor = "rgb(255, 182, 193)";
}

random_bg_color();

//* Align the `food-category` lists in a row on desktop. Make sure that the page is responsive and also works on mobile.
let foodCategory = document.getElementsByClassName("food-category");
for (let i = 0; i < foodCategory.length; i++) {
foodCategory[i].style.display = "inline-block";
foodCategory[i].style.margin = '2.5rem'
foodCategory[i].style.padding = "2rem 10rem 3rem 10rem";
}

//* Select the warning at the end of the page by its id `warning`. Select the id without using a querySelector. Change the size and font of the `warning`.
document.getElementById("warning").style.font = "bold 1.5rem arial,serif";
document.getElementById("warning").style.textAlign = "center";

//* Select all _even_ `allergy-info` items. Give the even items a different background color.
let allergy = document.getElementsByClassName("allergy-info");
for (let i = 0; i < allergy.length; i++) {
  if (i % 2 === 1) {
    allergy[i].style.backgroundColor = "blue";
  }
}

const allergySection = document.querySelector(".allergy-warning");
allergySection.style.display = "flex";
allergySection.style.flexFlow = "column";
allergySection.style.justifyContent = "center";
allergySection.style.alignItems = "center";



let allergyList = document.getElementById("listAllergy");
allergyList.style.listStyleType = "none";
allergyList.style.textAlign = "center";
allergyList.style.width = "45rem";
allergyList.style.marginLeft = "auto";
allergyList.style.marginRight = "auto";

//* The descriptions in the footer should also be styled, e.g.a rounded border with a background color.They should appear in a column for mobile and in
//a row for desktop.

let foodDesc = document.getElementsByClassName("food-desc");
for (let i = 0; i < foodDesc.length; i++) {
  foodDesc[i].style.border = "1px solid black";
  foodDesc[i].style.width = "5rem";  
  foodDesc[i].style.height = "5rem";
  foodDesc[i].style.backgroundColor='yellow'
  foodDesc[i].style.margin = "2rem";
  foodDesc[i].style.padding = "4rem";
  foodDesc[i].style.borderRadius = "50%";
  foodDesc[i].style.display = "inline-block";
  foodDesc[i].style.textAlign='center';
  foodDesc[i].style.display='flex';
  foodDesc[i].style.alignItems='center'
  foodDesc[i].style.justifyContent='center'
}



 let footerId=document.getElementById('footerId');
 footerId.style.display='flex';
 footerId.style.justifyContent='center'
 footerId.style.flexFlow = 'row wrap'










