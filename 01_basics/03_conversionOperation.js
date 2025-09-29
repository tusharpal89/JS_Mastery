let score = "33abc";  // 6th line m yeh toh number m convert nhi hona chayiye tha

console.log(typeof score);
console.log(typeof (score));

let valueIntNumber = Number(score)
console.log(typeof valueIntNumber)  // number
console.log(valueIntNumber)  // --> NaN

// "33" => 33
// "33abc" => NaN
// true => 1;  false => 0

let booleanisLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// summary

// 1 => true , 0 => false
// "" => false
// "hitesh" => true 

