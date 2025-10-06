// for of Loop 
// ["", "", ""]
// [{}, {}, {}]

const arr = [10, 20, 30, 40,50, 60, 70, 80, 90, 100, 110, 120]
for (const elem of arr) {
   // console.log(elem);
}

//++++++++++++++ Maps ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Maps mein Unique values hoti hai !!!

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")  // duplicate entry will be Deleted !!

// console.log(map);


// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }


// ++++++ Not iterable wala method of Object +++++++++++++++++++++++++++++++

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }
// for (const [key, value] of myObject) {
//     //console.log(key, ':-', value);
// }
//########################################################################################################

// ++++++ Iterable wala method of Object ++++++++++++[Object.entries()]++++++++++++++++++++++++++++++++++++++

// const myObject2 = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// Use Object.entries() to make the object iterable
// for (const [key, value] of Object.entries(myObject2)) {
//     console.log(key, ':-', value);
// }
//########################################################################################################

