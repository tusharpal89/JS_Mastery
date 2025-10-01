// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Tushar",
            lastname: "Shiraswal",
            location: "Bengaluru"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2) // ise hardly use krenge !!

const obj3 = {...obj1, ...obj2}

// console.log(`Object 3 :`);
// console.log(obj3)



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Database se maximum time 'Array of Objects' aata hai !!

  const users = [
      {
          id: 1,
          email: "h@gmail.com"
      },
      {
          id: 2,
          email: "t@gmail.com"
      },
  ]



  users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // keys ka yha Array return hoga !!
console.log(Object.values(tinderUser));//values ka yha Array return hoga !!

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
