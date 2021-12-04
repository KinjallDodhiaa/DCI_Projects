'use strict';

//An object must have properties

//Books is an Array of objects

let Books = [
  {
    BookTitle: "War of Art",
    Author: "Steven Presfield",
    Price: 35,
    Quantity: 10000,
  },
  {
    BookTitle: "Learning HTML in 21 Days",
    Author: "MO",
    Price: 10,
    Quantity: 10000,
  },
  {
    BookTitle: "Hack your network",
    Author: "Bill Gates",
    Price: 15,
    Quantity: 10000,
  },
  {
    BookTitle: "Learning HTML in 21 Days",
    Author: "MO",
    Price: 10,
    Quantity: 4000,
  },
  {
    BookTitle: "C++Programming",
    Author: "Kinjal",
    Price: 15,
    Quantity: 10000,
  },
  {
    BookTitle: "How to promote your songs",
    Author: "ABC",
    Price: 99,
    Quantity: 10000,
  },
  {
    BookTitle: "Develop your own web app",
    Author: "XYZ",
    Price: 35.75,
    Quantity: 10000,
  },
  {
    BookTitle: "Data structures in Java",
    Author: "Elun Musk",
    Price: 100,
    Quantity: 40000,
  }
];
console.log(Books[0].BookTitle);
console.log("$" + Books[0].Price);

let StrMessage;

//For loop
for (let Index = 0; Index < Books.length; Index++) {
  StrMessage = `Book Title is \"${Books[Index].BookTitle}"\, Price is $ ${Books[Index].Price}`;
  console.log(StrMessage);
}

//you can also use var for array. In below they r strings and not objects


let cars = ["BMW", "TESLA", "VW"];

