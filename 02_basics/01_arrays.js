// Arrays
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// The Array object, as with arrays in other programming languages, enables "storing a collection of multiple items under a single variable name," and has members for performing common array operations.


// Different types of elements can be placed in an Array in JavaScript !!
// In JS array's size can be changed !!

// +++++++++++++++++++++++++++++++++++++++++++++++++
// Javascript 'array-copy-operations' create 'shallow copies'. 

// Shallow Copy : A shallow copy of an object is a copy whose properties share the 'same references' (point to the same underlying values) as those of the source. ( Jo bhi change kroge woh Original Array m bhi change hoga !!)

// deep copy : A deep Copy of an object is Copy whose Properties do not share the same Reference point !!


// +++++++++++++ Prototype +++++++++++++++++++

// In JavaScript, every 'object' has a hidden property called [[Prototype]], which is basically a reference to another object. That "other object" is called its prototype.

// ++++++++++++++++++++++++++++++++++++++++++++

// myarr.unshift() => this adds elem. at the front, but Change all the indices of rest of the elements --> yeh bhtt time consuming task ho jaayega
// computer pr bhi load aayega !!



// +++++++++++++++++++ myArr.join() +++++++++++++++
// Join Array ko String mein convert kr deta hai !!

// const myArr = [1,2,3,4,5] 

// const newArr = myArr.join()

// console.log(myArr);   ==> [1, 2,  3, 4, 5]
// console.log(newArr);  ==> 1,2,3,4,5
// console.log(typeof newArr)  ==> string !!



//+++++++++++++++++++++++ .Split() +++++++++++++++++++++++++++++
// The split() method is used to convert a string into an array.



// +++++++++++++++++++ Slice V/s Splice ++++++++++++++++++++++

//slice() → returns a shallow copy of a portion of an array without modifying the original.

//splice() → adds/removes elements from an array and modifies the original.








// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3);

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);







