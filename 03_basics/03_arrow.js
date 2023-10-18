const user = {
  username: "suresh",
  price: 999,

  welcomeMessage: function () {
    //! "this" is used for current context
    console.log(`${this.username}, welcome to website`);
    // console.log(`${username}, welcome to website`);  //! will give error without this
    console.log(this);
  },
};

// user.welcomeMessage(); // suresh, welcome to website
// user.username = "sam ji";
// user.welcomeMessage(); // sam, welcome to website

// console.log(this); // OUTPUT-> {} (empty object)
//! in node, 'this' gives {} because their is no context in global object while in browser console, it gives "window" because window is global object their

// function chai() {
//   let username = "hitesh";
//   console.log(this.username);
//   // console.log(this);
//! in functions "this" keyword doesn't give any context of function
// }

// chai(); //OUTPUT-> undefined

// const chai = function () {
//   let username = "hitesh";
//   console.log(this.username);
// };
// chai();  //OUTPUT-> undefined

// const chai_2 = () => {
//   let username = "hitesh";
//   console.log(this);
// };
// chai_2(); //OUTPUT-> {}

//! ARROW fUNCTION ---> (para1, para2, ....) => {     //code      }

const addTwo = (num1, num2) => {
  return num1 + num2; //! explicit return with "return" keyword
};

const addTwo_v2 = (num1, num2) => num1 + num2; //! implicitly returned without "return" keyword

const addTwo_v4 = (num1, num2) => ({ username: "takeshi" });

const addTwo_v3 = (num1, num2) => {
  return { username: "takeshi_returns" }; //! whenever objects are returned they are always surrounded by {}
};

console.log(addTwo(3, 4));
console.log(addTwo_v2(3, 4));
console.log(addTwo_v4(3, 4));
console.log(addTwo_v3(3, 4));
