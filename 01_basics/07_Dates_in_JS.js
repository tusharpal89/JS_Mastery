let myDate = new Date();

// console.log(myDate.toString());

// console.log(myDate.toDateString())

// console.log(myDate.toLocaleString());

// date is an Object in Javascript !!

// Month start from '0' in javascript !!

/*
let myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString()); 

*/ 

// *** Whenever you do MM-DD-YY, then month start from 1 in Javascript !!
/*
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());
*/


/*
const myBdayDate = new Date("11-12-2025")

console.log(myBdayDate.toDateString())

const myBdayDateModified = new Date("11-08-2025")

console.log(myBdayDateModified.toDateString())

*/



// ********** Time Stamps ***************************

/*

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myBdayDate.getTime());
console.log(Math.floor(Date.now()/1000));

*/


// *** '.toLocalString' k andar aap jo define krte h woh ek Object define krte hai

// ++++++++++++++++++++ ^^^ +++++++++++++++++++++++++++
// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })



// ++++++++++ Month Starting from zero here !! +++++++++++

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getMonth() + 1); => so that end user won't confuse!!









