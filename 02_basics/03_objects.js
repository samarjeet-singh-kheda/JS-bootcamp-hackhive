//objects can be declared as either constructors or literals

// singleton(unique in itself  don't have multiple instances)
// when declared as literals then never singleton, but with constructors always singleton

// object literals
const mySym = Symbol("key1");
const mySym2 = Symbol("key2");

const JsUser = {
  name: "Hitesh", //accessed with "." notation
  "full name": "Hitesh Choudhary", //accessed with ["full name"]
  [mySym]: "mykey1",
  mySym2: "mykey2",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email); // these both
// console.log(JsUser["email"]); // are the same
// console.log(JsUser["full name"]); // string keys can be accesssed by this only
// console.log(JsUser[mySym]); // way to access symbols
// console.log(JsUser.mySym2);
// console.log(typeof JsUser[mySym]);
// console.log(typeof JsUser.mySym2);

// JsUser.email = "hitesh@chatgpt.com"; // objects can easily be overewritten
// Object.freeze(JsUser); // to block all changes
// JsUser.email = "hitesh@microsoft.com"; // wouldn't give error but won't have any effect
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`); //this keyword used for accessing property of objects
};

console.log(JsUser.greeting); // [Function (anonymous)], function is not executed only, refrenced
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());