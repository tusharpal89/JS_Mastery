// 1.Primitive

// String, Number, Boolean, null, undefined, symbol, BigInt


// ***Js Mastery -> Bss Objects & Browser k events ko master kr Lijiye***

// 2. Non-Primitive / Reference  

// Array, Objects, Functions 

// JS is Dynamically typed Prog. Language !!

const id = Symbol('123')

const anotherId = Symbol('123')

//console.log(id === anotherId);

 // curly braces k andar jo bhi hai, woh ek Object hai !!
 
 /*

 let myObj = {
    name : "Tushar",
    age: 20,
 }

 */


// ****** JS m aap function k bhi variable ki tarah Treat kr skte hai ***

 // const myfunction = function (){}

 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++ Memory ++++++++++++++++++++++++++++++++++++++


// Stack ( Primitive) => stack k andar se hmesha ek copy hi milta hai
// Heap  (Non- Primitive ) => Heap k andar se hmesha ek Reference milta hai

// *** Reference se matlab h jo bhi aap changes krte hai toh 
// actual values k andar hi krte hai !!

let myYoutubename = "tusharPaldotcom"

let anothername = myYoutubename

anothername = "chaiaurcode"

//console.log(myYoutubename)

//console.log(anothername)


// Heap k andar jo bhi jata hai uska Reference hi milta h hmesha !!

let userOne = {
   email: "tushh@gmail.com",
   upi : "user@ybl",
}

let userTwo = userOne

userTwo.email = "tushh@gmail.com"

//console.log(userOne)

//console.log(userTwo)



