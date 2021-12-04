/*Create a simple BookStore app in JavaScript with the following properties:
Title, Price, ISBN, quantity, year, author, publisher, description.


Then you implement the following options for your BookStore app.

0. Insert at least ten records
1. Use Math.random for adding unique numbers (e.g., for ISBNs)
2. Show all the records via a simple for loop
3  Find the cheapest and most expensive book in your app via math functions
4. Your app should be able to show specific records (aka books) with certain keywords in their title
5. [This is optional] insert information to your array via a for loop
*/

let Books = [
  {
    BookTitle: "War of Art",
    Author: "Steven Pressfield",
    Price: 35.75,
    Quantity: 10000,
  },
  {
    BookTitle: "Learning HTML in 21 Days!",
    Author: "Mohammadreza Ashouri",
    Price: 10,
    Quantity: 10000,
  },
  {
    BookTitle: "Hack Your Network!",
    Author: "Bill Gates",
    Price: 12,
    Quantity: 4000,
  },
];
let strMessage;

let ISBN;
ISBN = Math.random() * 1000000000000;
ISBN = parseInt(ISBN);
console.log(ISBN);

for (i = 0; i < Books.length; i++) {
  strMessage = `${i + 1}. Book title is ${Books[i].BookTitle} and price is $ ${
    Books[i].Price
  }`;
  console.log(strMessage);
}

let cheapestbook = Math.min(Books[0].Price, Books[1].Price, Books[2].Price);
console.log(cheapestbook);

let expensivebook = Math.max(Books[0].Price, Books[1].Price, Books[2].Price);
console.log(expensivebook);

let Keyword = "HTML";
for (i = 0; i < Books.length; i++) {
  if (Books[i].BookTitle.includes(Keyword) === true) {
    console.log("buy");
  }
}

let animals = ["dog", "cow", "cats"];
animals.push("horse");
console.log(animals);

const found = animals.find((element) => element === "dog");
console.log(found);

