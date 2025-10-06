// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }

// chai()


//+++++++++++++++++ IIFE --> ()() ++++++++++++++++++++++++++++++++++++++
// first () === for Function Definition &  Second....() === is for Excution
// (function chai(){
//     console.log(`DB CONNECTED`);
// })
// chai()


// Global Scope k declaration k pollution ko htane k liye humne 
// IIFE ka use kiya !!

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// IIFE m hmesha semicolon lgana zruri hai end m !!!

// (function chai(){
//     console.log(`DB CONNECTED`);
// })
// chai()


// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')


// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that is executed instantly upon its definition, creating a private scope for variables to prevent the pollution of the global scope.


//+++++++++++++++++++++ Named IIFE V/s  Without Name IIFE ++++++++++++++++++

// (function chai(){
//   // named IIFE
//   console.log(`DB CONNECTED`);
// })();

// ( (name) => {
//   console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')
 




