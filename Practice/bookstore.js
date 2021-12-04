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

/*for(let i=0; i<=Books.length; i++){
  strMessage = `${i + 1}. `;
  console.log(strMessage);*/


for (let i = 0; i < Books.length; i++) {
  strMessage = `The Book number ${i + 1}. Book title is ${Books[i].BookTitle} and price is $ ${Books[i].Price}`;
  console.log(strMessage);
} 

// for(let Index=0; Index < Books.length ; Index ++) {

//     StrMessage = ` The Book Number ${Index+1}  -- > Book Title is \"${Books[Index].BookTitle}\", Price is $ ${Books[Index].Price}`;
//     console.log(StrMessage);

// }
