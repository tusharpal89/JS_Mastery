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