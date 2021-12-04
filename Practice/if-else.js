//Today is December, the 1st of the year 2020. Today i sleep.
/* December start from the 1st and ends on 31st
 *
 * What do I do in December?
 *
 * - from the 3rd to the 8th                I go to school
 * - from the 13th to the 15th              I get drunk on Javascript
 * - from the 23rd to the 27th              I'm in Lepizig visit my cousins for Christmas
 *
 *
 * The rest of the days: I sleep*/

/* const daysInDecember = 31;

function numberEndsWith1(num) {
  return num % 10 === 1;
}
function numberEndsWith11(num) {
  return num % 100 === 11;
}
function numberEndsWith2(num) {
  return num % 10 === 2;
}
function numberEndsWith12(num) {
  return num % 100 === 12;
}
function numberEndsWith3(num) {
  return num % 10 === 3;
}
function numberEndsWith13(num) {
  return num % 100 === 13;
}

function getOrdinalIndicator(day) {
  if (numberEndsWith1(day)) {
    if (numberEndsWith11(day)) return day + "th";
    else return day + "st";
  } else if (numberEndsWith2(day)) {
    if (numberEndsWith12(day)) return day + "th";
    else return day + "nd";
  } else if (numberEndsWith3(day)) {
    if (numberEndsWith13(day)) return day + "th";
    else return day + "rd";
  } else return day + "th";
}

function getAction(dayOfTheMonth) {
  if (dayOfTheMonth >= 3 && dayOfTheMonth <= 8) {
    return "I go to school";
  } else if (dayOfTheMonth >= 13 && dayOfTheMonth <= 15) {
    return "I get drunk on javascript";
  } else if (dayOfTheMonth >= 23 && dayOfTheMonth <= 27) {
    return "I visit my cousin";
  } else return "I take rest";
}

for (let day = 1; day <= daysInDecember; day++) {
  let ordinalIndicator = getOrdinalIndicator(day);
  let action = getAction(day);
  // console.log(`Today is December, the ${ordinalIndicator} of the year 2020. Today I ${action}`);
}

//<----------------------------------------------------->

//If it is work day, oh no i have to work. If it is Weekend, i can relax but if profession is web dev i have to work.

const daysOfTheWeek = 7;
let professions = ["web-dev", "Gardener", "Bridge-builder"];
let profession = professions[2];

function isWeekend(day) {
  if (day === 6 || day === 7) return "It is weekend";
}

for (day = 1; day <= daysOfTheWeek; day++) {
  if (!isWeekend(day)) console.log("Oh no i have to work");
  else if (isWeekend(day)) {
    if (profession === "web-dev")
      console.log("Its weekend but i still have to work");
    else console.log("I can relax");
  }
} */

let daysInDecember = 31;

function numberEndsWith1(num) {
  return num % 10 === 1;
}

function numberEndsWith11(num) {
  return num % 100 === 11;
}

function numberEndsWith12(num) {
  return num % 100 === 12;
}

function numberEndsWith13(num) {
  return num % 100 === 13;
}

function numberEndsWith2(num) {
  return num % 10 === 2;
}

function numberEndsWith3(num) {
  return num % 10 === 3;
}

function getOrdinalIndicator(day) {
  if (numberEndsWith1(day)) {
    if (numberEndsWith11(day)) {
      return day + "th";
    } else {
      return day + "st";
    }
  } else if (numberEndsWith2(day)) {
    if (numberEndsWith12(day)) {
      return day + "th";
    } else {
      return day + "nd";
    }
  } else if (numberEndsWith3(day)) {
    if (numberEndsWith13(day)) {
      return day + "th";
    } else {
      return day + "rd";
    }
  } else {return day + 'th'}
}

function getAction(daysOfMonth){
  if(daysOfMonth>=3 && daysOfMonth<=8){
    return 'i go to school';
  }else if(daysOfMonth>=13&&daysOfMonth<=15){
    return 'i get drunk on javascript';
  }else if(daysOfMonth>=23&&daysOfMonth<=27){
    return 'i m at cousins home';
  }else {return 'i sleep';}
}

for(let i=1; i<=daysInDecember; i++){
  let ordinalIndicator = getOrdinalIndicator(i);
  let action = getAction(i);
  console.log(`Today is December, the ${ordinalIndicator} of the year 2020. Today i ${action}`);
}