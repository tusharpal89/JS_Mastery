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

//console.log(Object.keys(tinderUser)); // keys ka yha Array return hoga !! --> yeh future m bhtt kaam aayega Array par baad m hum loops lgakr bhi values return kr skte hai !!

//console.log(Object.values(tinderUser));//values ka yha Array return hoga !!

//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Objects 'from Destructuring Now' 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor} = course  // New Way to declare !!


console.log(courseInstructor);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Agar hme lag rha hai ki course Instructor bda naam ho rha hai toh hum apne hisaab se bhi naam de skte hai !!

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// React m har baar yeh 'props.company' likhne ki zrurat nhi hoti hai !! 

// *************************

// const navbar = (props.company) => {

// }

// navbar(company = "hitesh")

//*********************************************** */


// Log...Yhi curly braces de dete hai aur likh dete {company}
// iss curly braces wale syntax ko hi Destructuring khte hai !! 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")

// +++++++++++++++++++++++++++++++++++++++++++++++++++++


// phle k time par values backend se aati thi XML k format m
// ab aati hai, JSON k format mein woh, jo ki JSON easy to read
// and write hai !!


// JSON bhi ek Object hi hai ----> { }

// Agar aapne keval aese likh diya toh yeh JSON ki tarah Treat 
// kiya jata hai !!


// {
//     name: "hitesh",
//     coursename: "js in hindi",
//     price: "free"
// }


// Proper JSON ka Structure !!

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// kbhi kbhi aapko API's Array ki format m bhi milti hai !!
[
    {},
    {},
    {}
]




