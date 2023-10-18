const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

//! falsy values ----> false, 0, -0, BigInt 0n, "", null, undefined, NaN
//! truthy values -----> "0", 'false', " ", [], {}, function(){}

//! function(){} -----> empty function

if (userEmail.length === 0) {
  //to check if array is empty or not
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  //converted obj to array, then checked it's length
  console.log("Object is empty");
}

//! Nullish Coalescing Operator (??): null undefined
//! returns first value which is neither null or undefined or the last value if only null and undefined

let val1;
// val1 = 5 ?? 10;       OUTPUT ---->  5
// val1 = null ?? 10;       OUTPUT ----> 10
// val1 = undefined ?? 15;       OUTPUT ----> 15
// val1 = null ?? 10 ?? 20;       OUTPUT ----> 10
// val1 = null ?? undefined;       OUTPUT ----> undefined
// val1 = undefined ?? null;       OUTPUT ----> null
// val1 = undefined ?? false ?? 11;       OUTPUT ----> false
val1 = undefined ?? null ?? null ?? undefined ?? null; //OUTPUT ----> null
console.log(val1);

// Ternary Operator -----> //!      condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
