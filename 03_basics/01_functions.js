function sayMyName() {
  console.log("G");
  console.log("a");
  console.log("j");
  console.log("j");
  console.log("u");
}

// sayMyName();

function addTwoNumbers(num1, num2) {
  // in function definition it's called parameters
  return num1 + num2;
  console.log("icecream man"); //unreachable code detected
}

// console.log(addTwoNumbers(23, "i")); // in function invocation it's called arguments

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result, "result printed."); //in console.log("") concatenation is not required, just using "," is enough

function loginUserMessage(username = "sam") {
  // here, default value is defined
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

function loginUserMessage_V2(username) {
  return `${username} just logged in`;
}

function loginUserMessage_V3(username) {
  if (!username) {
    //returns this meassage on undefined
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("ritesh")); // ritesh just logged in
// console.log(loginUserMessage); // [Function: loginUserMessage]
// console.log(loginUserMessage()); // sam just logged in

// console.log(loginUserMessage_V2()); // undefined just logged in (it uses undefined in variable in case of no arguemnt)

// console.log(loginUserMessage_V3());

function calculateCartPrice(...num1) {
  // spread operator bundled everything in sort of a package, which is array in this case
  return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000)); // [ 200, 400, 500, 2000 ]

function calculateCartPrice_V2(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCartPrice_V2(200, 400, 500, 2000)); // [ 500, 2000 ]
// here, only [500, 2000] are bundled by ...num1 & val1=200, val2=400

const user = {
  username: "smiley",
  price: 199,
};

const user02 = {
  username: "smiley",
  prices: 199,
};

// a function handling object
function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject(user); // Username is smiley and price is 199

handleObject(user02); // Username is smiley and price is undefined -> have to put type safety in such cases

handleObject({
  username: "sam",
  price: 399,
});

// function handling array
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([200, 400, 500, 1000])); //400
