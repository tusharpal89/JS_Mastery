// Singleton : whenever you make Object from 'Constructor', this would be 
// unique ( yeh apne tarah ka ek hi Object hai !!)

 // agar Constructor se ban rha hai toh singleton hai, otherwise nhi hai !!

// Singleton : Object.create



// ++++++++++++++++++ Object Using Literals +++++++++++++++++++++++++++++
//    const JsUser = {
//       name: "Tushar Pal",
//       "Full Name": "Tushar Pal Shiraswal",
//       age: 19,
//       location: "Bengaluru,Karnataka",
//       email: "tusharshiraswal@gmail.com",
//       isLoggedIn: false,

//    }

   // Two ways to Access Object's Elements
// 1.
  // console,log(JsUser.email)

// 2.  
  // console.log(JsUser["Full Name"])





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Pick up a symbol and add that into the Object's Keys and print that !!


  const mysymb = Symbol("Key1")

   const JsUser = {
      name: "Tushar Pal",
      "Full Name": "Tushar Pal Shiraswal",
      [mysymb] : "myKey1",
      age: 19,
      location: "Bengaluru,Karnataka",
      email: "tusharshiraswal@gmail.com",
      isLoggedIn: false,

   }


   //console.log(JsUser[mysymb])


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// How to Freeze any kind of Changes in an Object !!

// Object.freeze(JsUser)

// JsUser.email = "tushh@chatgpt.com" // This won't change now !! 

// console.log(JsUser.email)



JsUser.greeting = function(){
    console.log("Hello JS Users !!")
}


console.log(JsUser.greeting());




