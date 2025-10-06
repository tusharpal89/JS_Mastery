// Execution Context : ka matlab hai, aapne jo bhi file bnayi hai JS
// usko Run kse kregi ya Execute kse kregi !!!


// Single-threaded matlab hota hai ki ek time par sirf ek hi kaam (task or operation) execute hota hai — yani program ek hi thread (execution line) me chalta hai, parallel me multiple tasks nahi karta.


// 1. Global Execution Context !
// 2. Function Execution Context !
// 3. Eval Execution Context !


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Two phases are there 
// 1. Memory Creation Phase
// 2. Execution Phase !


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let val1 = 10
// let val2 = 5
// function addNum(num1, num2){
//     let total = num1 + num2
//     return total
// }
// let result1 = addNum(val1, val2)
// let result2 = addNum(10, 2)


//-->1. Global Execution*** 

//-->2.  Memory Phase***
// val1 -> undefined
// val2 -> undefined
// addnum -> defination
// result1 -> undefined
// result2 -> undefined

//--> 3. Execution Phase***
// val1 <- 10
// val2 <- 5
// addNum -> [new variable environment + Execution Thread]







  