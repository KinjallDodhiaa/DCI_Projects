const daysInDecember = 31;

function numberEndsWith1(num) {
  return num % 10 === 1;
}
function numberEndsWith2(num) {
  return num % 10 === 2;
}
function numberEndsWith3(num) {
  return num % 10 === 3;
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

function getOrdinalIndicatorForDay(day) {
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

function getAction(dayOfMonth) {
  if (dayOfMonth >= 3 && dayOfMonth <= 8) {
    return "i go to school";
  } else if (dayOfMonth >= 13 && dayOfMonth <= 15) {
    return "i get drunk on js";
  } else {
    return "i go to sleep";
  }
}

for (day = 1; day <= daysInDecember; day++) {
  var ordinalIndicator = getOrdinalIndicatorForDay(day);
  var action = getAction(day);
  console.log(
    `Today is December, the ${ordinalIndicator} of the year 2020.Today ${action}`
  );
}
