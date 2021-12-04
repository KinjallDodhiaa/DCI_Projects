const daysOfWeek = 7;
const Professions = ["web-dev", "gardener","bridge-builder"];
const Profession = Professions[2];

function isWeekendDay(day){
    return (day===6)|| (day===7);
}

function isWorkDay(day){
    return ! isWeekendDay(day);
}


for(var i=1; i <= daysOfWeek; i++) {
    if (isWorkDay(i) ){
        console.log("i have to work");
    } else {
     if (Profession==="web-dev"){
         console.log("its weekend but have to work")
     }else {
         console.log("i can relax")
     }
    }
}

const DAYS_OF_THE_WEEK = 7;

const PROFESSIONS = ["web-dev", "gardener", "bridge-builder"]; // only the web dev works during the weekend
const PROFESSION = PROFESSIONS[1];

function isWeekendDay(day) { // Step 5: run the isWeekendDay function

        return (day === 6) || (day === 7); // Step 6: evaluate the two conditions (see table above) and return a boolean result
}

function isWorkDay(day) { // Step 3: run the isWorkDay function
    // Step 4: call the isWeekendDay function
    return ! isWeekendDay(day); // Step 7: retrieve the result, negate it, and return it out of the isWorkDay function
}
for (var i = 1; i <= DAYS_OF_THE_WEEK; i++) {
    
    if (isWorkDay(i)) { // Step 2: call the isWorkDay function // Step 8: retrieve the result of the isWorkDay function
        // Step 8.1: ....
        console.log("Oh nooo I have to work")
    } else { // it's weekend
        // Step 8.2: ....
        if (PROFESSION === "web-dev") {
            console.log("It's weekend but I still have to work");
        } else {
            console.log("I can relax");
        }
    }

}
// -----------------------------------------------------------------

//1.Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

let x = 40;
let y =30;
let z=20;

function numberRange1(n1){
    return (n1 >=50 && n1 <=99);
}
function numberRange2(n2){
    return (n2>= 50 && n2<= 99);
}
function numberRange3(n3){
    return (n3 >= 50 && n3<= 99);
}

if (numberRange1(x) || numberRange2(y) || numberRange3(z)) {
    console.log("It is true");}
    else{
        console.log("false");
    }

//7.Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
let a = 10;
let b = 5;



function aValue(n1){
    return (n1===15);
}

function bValue(n2){
    return (n2===15);
}

function sumOfNum(n1,n2){
    return (n1+n2===15);
}

if (aValue(a) || bValue(b) || (sumOfNum(a,b))){
    console.log("its true")
}else{
    console.log("false");
}

