let x;
let y;

x = y = false;
console.log(x && y);

x = false;
y = true;
console.log(x && y);

x = true;
y = true;
console.log(x || y);

x = false;
y = true;
console.log(x || y);

x = true;
y = false;
console.log(x || y);

x = false;
y = false;
console.log(x || y);

var arr1 = ["Mumabi", "Puna", "Jamnagar"];
arr1.unshift("Karjat");
console.log(arr1);
console.log(arr1.slice(1));