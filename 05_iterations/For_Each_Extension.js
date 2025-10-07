//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Har baar zruri hi nhi ki hum print hi kre `For Each` ki madad se, kbhi kbhi hme return bhi krana pad skta h lekin woh `For Each` se possible nhi hai !!

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);


// ********* ForEach values ko Return nhi krta hai........
//********** Lekin :- .filter() --> values ko return bhi krta hai !!!
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);


// *************************************************************************
// Agar Curly Braces use kar rhe ho toh aapko `return` keyword likhna pdega !!
// const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums2 = myNums.filter( (num) => {
//     return num > 4
// } )
// console.log(newNums);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Books wala Example with .filter() !!

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981,
    edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
    edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999,
    edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
    edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009,
    edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987,
    edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986,
    edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011,
    edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981,
    edition: 1989 },
];


const usersBooks = books.filter(  (bk) => bk.genre === 'History' )


console.log(usersBooks);





