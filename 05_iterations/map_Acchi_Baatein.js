// Map ki kuchh acchi baatein !!
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumbers.map( (num) => num + 10 )
// console.log(newNums);



//*********************** Chaining jitna marjio utna Chaining kar skte hai *********************************
// Chaining....

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)

// console.log(newNums);

//###########################################################################################################


//************** Aap jitni chahe Utni Chaining Kar skte ho *************************************************

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40) // filter m True / False k basis par value filter hoti hai !!

console.log(newNums)

//##########################################################################################################


