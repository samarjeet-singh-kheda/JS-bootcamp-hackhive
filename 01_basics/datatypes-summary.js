//  Primitive
// these are call by value, not call by type. Thus, changes are always in just copy intself, not the original variable
//  7 types : String, Number, Boolean, null, undefined, Symbol(for making unique), BigInt

const score = 100;
const scoreValue = 100.3;
//js is dynamically typed, types are assigned to values not variables
const isLoggedIn = false;
const outsideTemp = null; // typeof -> "object"
let userEmail; //it's undefined

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); //false bcoz they are unique due to being symbol

// const bigNumber = 3456543576654356754n, ends with n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //type -> object //array injs
let myObj = {
  name: "hitesh", //obj in js, key value pair
  age: 22,
};

const myFunction = function () {
  //type -> function object
  console.log("Hello world"); //function in js
};

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
