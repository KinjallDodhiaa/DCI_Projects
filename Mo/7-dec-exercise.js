"use strict";

let Books = [
  {
    BookTitle: "War of Art",
    Price: "30",
    Publisher: "Rugged Land",
    Quantity: "10000",
    Year: "2002",
    //ISBN: "0123456789123",
    Description: "Break Through the Blocks and Win Your Inner Creative Battles",
  },
  {
    BookTitle: "The Secret",
    Price: "40",
    Publisher: "Rhonda byrne",
    Quantity: "50000",
    Year: "2006",
    //ISBN: "6876876483764",
    Description: "Ask, Believe, Receive",
  },
  {
    BookTitle: "Learn HTML in 20 days",
    Price: "20",
    Publisher: "Abcdef",
    Quantity: "10000",
    Year: "2000",
    //ISBN: "6864873475367",
    Description: "Learn HTML in 20 days",
  },
  {
    BookTitle: "Learn CSS 20 days",
    Price: "20",
    Publisher: "gvxhjvs",
    Quantity: "20000",
    Year: "2000",
    //ISBN: "6543789654325",
    Description: "ALl about CSS in 20 days",
  },
  {
    BookTitle: "Learn Javascript in 20 days",
    Price: "15",
    Publisher: "vhjvcjbd",
    Quantity: "15000",
    Year: "2006",
    //ISBN: "1234567898765",
    Description: "All about javascript in 20 days",
  },
  {
    BookTitle: "Learn Python in 20 days",
    Price: "25",
    Publisher: "vcdjcddce",
    Quantity: "12000",
    Year: "2014",
    ISBN: "1234567654321",
    Description: "All about Python in 20 days",
  },
  {
    BookTitle: "Responsive web designs",
    Price: "10",
    Publisher: "vhjcevjhdv",
    Quantity: "20000",
    Year: "2014",
    //ISBN: "6543245678976",
    Description: "Learn how to make websites responsive in just 10 days",
  },
  {
    BookTitle: "SAAS",
    Price: "10",
    Publisher: "vshvsjv",
    Quantity: "5000",
    Year: "2019",
    //ISBN: "12233356783222",
    Description: "Learn SAAS in just 10 days",
  },
  {
    BookTitle: "Java Basics",
    Price: "35",
    Publisher: "fvnkdfhkv",
    Quantity: "40000",
    Year: "2014",
    ISBN: "1234567898762",
    Description: "Learn Java basics",
  },
  {
    BookTitle: "Java Advance",
    Price: "40",
    Publisher: "ghchvhgvj",
    Quantity: "50000",
    Year: "2015",
    //ISBN: "6789956743271",
    Description: "Learn Java advance",
  },
];

let ISBN;
ISBN = Math.random()*100;
console.log(ISBN);

//2. Show all the records via a simple for loop
let StrMessage;
for (let Index = 0; Index < Books.length; Index++) {
  StrMessage = `Book Title is \"${Books[Index].BookTitle}"\, Price is $ ${Books[Index].Price},Publisher is ${Books[Index].Publisher},Quantity is ${Books[Index].Quantity},Year is ${Books[Index].Year},Description is ${Books[Index].Description}}`;
  console.log(StrMessage);
}

//3  Find the cheapest and most expensive book in your app via math functions

let CheapestBook = Math.min(
  Books[0].Price,
  Books[1].Price,
  Books[2].Price,
  Books[3].Price,
  Books[4].Price,
  Books[5].Price,
  Books[6].Price,
  Books[7].Price,
  Books[8].Price,
  Books[9].Price
);
console.log(CheapestBook);

let ExpensiveBook = Math.max(
  Books[0].Price,
  Books[1].Price,
  Books[2].Price,
  Books[3].Price,
  Books[4].Price,
  Books[5].Price,
  Books[6].Price,
  Books[7].Price,
  Books[8].Price,
  Books[9].Price
);
console.log(ExpensiveBook);

//5.

let Keyword1 = "JavaScript";
let Keyword2 = "HTML";
for (Index = 0; Index < Books.length; Index++) {
  if (Books[Index].BookTitle.includes(Keyword1) == true) {
    console.log(`\"${Books[Index].BookTitle}\" is about ${Keyword1}`);
  }
}
for (Index = 0; Index < Books.length; Index++) {
  if (Books[Index].BookTitle.includes(Keyword2) == true) {
    console.log(`\"${Books[Index].BookTitle}\" is about ${Keyword2}`);
  }
}

//6. [This is optional] insert information to your array via a for loop

for (var i = 0; i <= Books.length; i++) {
  console.log("loop " + i, Books[i]);
}
