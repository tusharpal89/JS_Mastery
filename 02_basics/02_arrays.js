// Any type of Data can be stored in an Array , (itself Array) can be stored
// in an Array !!

// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// +++++++++ Concat --> returns a new Array !! +++++++++++++++++++
// Arr1.concat(Arr2) 

// ++++++++++++++++++++++  Spread Operator +++++++++++++++++++++++++++

//   const Arr1 = ["DataTypes","Loops","functions"]
//   const Arr2 = ["Arrays","Vectors", "Sorting"]
//   const combinedArr = [...Arr1, ...Arr2]
//   console.log(combinedArr)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++ Array k andar Array uss Array k andar one more Array ko flat krdo

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// ++++++++++++++ is data in the format of an Array ?? ++++++++++++++++
// console.log(Array.isArray("Hitesh"))

// +++++++++++++ Forming of an Array ++++++++++++++
//console.log(Array.from("Hitesh"))


// ++++++++++++ Interesting case ++++++++++++++++++++++++

//console.log(Array.from({name: "hitesh"})) // will return an empty array !!


// ++++++++ Returns an Array from a set of Elements ++++++++++++++++++++

let score1 = 100

let score2 = 200

let score3 = 300

console.log(Array.of(score1,score2,score3))










