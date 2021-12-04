// /**Write a JavaScript program to filter out the non-unique values in an array.
// Example input: [6, 1, 1, 4, 5, 6, 11, 10, 11, 8]*/
// function nonUniqueValues(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// }

// console.log(nonUniqueValues([6, 1, 1, 4, 5, 6, 11, 10, 11, 8]));

// /**and below is the way from google which i dont understand. Like they have used 2 time arrow n stuff*/
// const filter_Non_Unique = (arr) =>
//   arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

// console.log(filter_Non_Unique([1, 2, 2, 3, 4, 4, 5]));

// //-------------------------------------------------------------------------------------------------------------------------

// /** 5. Arrays
// Write a JavaScript program to get an array of elements that appear in both arrays.
// Example input: [1, 2, 3, 4], [1, 4, 6, 8]
// Expected output: [1, 4]
// */

// function commonOccurrence(arr1, arr2) {
//   let arr3 = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         arr3.push(arr1[i]);
//       }
//     }
//   }
//   return arr3;
// }

// console.log(commonOccurrence([1, 2, 3, 4], [1, 4, 6, 8]));

// /**and below is the way from google which i dont understand.*/
// const similarity = (arr, values) => arr.filter((v) => values.includes(v));

// function sumArray(arr){
//     let total=0;
//     for(let i=0; i<arr.length; i++){
//         total = total+ arr[i];
//     }
//     return total;
// }

// console.log(sumArray([1,2,3,4]));

// function returnDay(day) {
//   let daysOfWeek = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   if (day < 1 || day > 7) {
//     return null;
//   } else {
//     return daysOfWeek[day - 1];
//   }
// }

// console.log(returnDay(1));
// console.log(returnDay(2));
// console.log(returnDay(3));
// console.log(returnDay(4));
// console.log(returnDay(5));
// console.log(returnDay(6));
// console.log(returnDay(7));
// console.log(returnDay(8));
// console.log(returnDay(0));

const createPerson = (name,age,gender) => ({name,age,gender});

console.log(createPerson('Kinjal',30,'Female'));
