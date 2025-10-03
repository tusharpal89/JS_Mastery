// rest and spread Operator (...)=> isi ko Rest Operator bola jata hai aur
// isi ko Spread Operator !!


// cart m multiple items ke price ko add krna ( [200, 400, 500] => baad m array lgakar iss array price ka summation kr lenge !! )
// function calculateCartPrice(...num1){   // Rest Operator hai yeh !!!
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Another Variant val1, val2 and ...num1
// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Passing Object to an FUNCTION !!

// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user)



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Passing Array to a Function and Returns its Second Vaue !!

 const myNewArray = [100, 200, 400, 700]

 function returnSecondValue (getArray){
    return getArray[1]
 }

 console.log(returnSecondValue(myNewArray));
 
