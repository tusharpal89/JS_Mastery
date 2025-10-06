// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

//+++++++++++++++++++++++++ With Arrow Function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (val) =>{
//   console.log(val);
  
// })


//++++++++++++ ForEach k through koi dusra function bhi loop m print hone k liye pss kr skte hai++++++++++++

function printMe(item){
   // console.log(item);
}

// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )
