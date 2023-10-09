// array creates shallow copies, share same refrence points (heap)

const myArr = [0, 1, 2, 3, 4, 5]; //collection of diff items in a single variable, can be of diff datatypes
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9); //add element at the beginning
// console.log(myArr);
// myArr.shift(); //delete element at the beginning
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3)); //-1 if not present

// const newArr = myArr.join("@"); //joins array ina string with the given parameter, "," if not specified

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("original->", myArr);

const myn1 = myArr.slice(1, 3); // begin to end-1, no affect on og array
console.log("slice->", myn1);
console.log("after slice->", myArr);

const myn2 = myArr.splice(1, 3); //begin to end, cuts out the entire part from og array
console.log("splice->", myn2); //splice-> [ 1, 2, 3 ]
console.log("after splice->", myArr); //after splice-> [ 0, 4, 5 ]
