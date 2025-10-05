// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//     }
// }

// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(this) --> Node Environment k andar 'this' ka current context Empty hota hai !!


// Browser k andar 'this' ka current context "Window" aata hai !!

// Browser k andar jo global Object hai woh hai, window Object !!

// function chai(){
//     console.log(this); // yha par bhtt saari values aayegi, Global env. and all.....
    
// }


// Functions k andar aakr hum 'this' use nhi kar pa rhe hai !!!

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);  --> undefined 
// }



// const chai = () => {
//     let username = "hitesh"
//     console.log(this);   // ---> {}
// }


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4))


//++++++ Curly Braces mein Wrap kra --> return Keyword +++++++++++++++++++++

// else, () => ()++++++++++ No need to write 'return' keyword+++++++++++++++


// // returning an Object !!
// const addTwo = (num1, num2) => ({username: "hitesh"})






