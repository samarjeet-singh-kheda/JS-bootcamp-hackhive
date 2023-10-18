// let a = 10;
// const b = 30;
// var c = 40;

// console.log(a);
// console.log(b);
//  console.log(c);

var c = 300;

// !scope is usually defined between { }, in case of function and if-else
// !but for objects { } is simply object declaration
if (true) {
  let a = 10;
  const b = 30;
  //   var c = 40;
  c = 10000;
}

// console.log(a); // !can't be accessed
// console.log(b); // !since these two are defined in local scope, not global scope
// console.log(c); // !var gets updated by both local scope 'var c=40' & 'c = 10000'

function one() {
  const user = "samar";

  function two(user) {
    const website = "yt";
    console.log(website);
  }
  return user;
}

// console.log(user);       //!they are
// console.log(website);    //!outside their scope

// console.log(one());

if (true) {
  user = "jeetu";
  if (user === "jeetu") {
    console.log("great progress");
  }
}

// console.log(user);     //!they are accessed
// console.log(website); // !outside their scope

//++++++++++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5));

function addOne(num) {
  // !function can be called before declaration
  return num + 1;
}

//!function can be called before declaration
const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5));
