// const score = 400;
// console.log(score);

// const balance = new Number(100.4328482749); //via object
// console.log(balance); // [Number: 100] instead of 100

// console.log(balance.toString().length);
// console.log(balance.toFixed(3)); //to a fixed value after decimal, 100.433

// let otherNumber = 125.8966;
// console.log(otherNumber.toPrecision(4)); //125.9,  to a fixed value starting from MSB of whole part

// otherNumber = 125344.8966;
// console.log(otherNumber.toPrecision(4)); //1.253e+5, rounds off then use 'e+' format

// const hundreds = 100000000000000;
// console.log(hundreds.toLocaleString("en-IN")); //10,00,000 //indian place value -> en-IN
// console.log(hundreds.toLocaleString()); //1,000,000 //default international place value

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //absoute value
// console.log(Math.round(4.5)); //round off
// console.log(Math.ceil(4.2)); //ceiling value
// console.log(Math.floor(4.9));
// console.log(Math.min(4, Math.PI, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // 0 to 1
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
