// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); // converyed string to number
// console.log("02" > 1);

console.log(null > 0); // == and comparison operators work differently
console.log(null == 0); // comp. op. converts null to number 0
console.log(null >= 0); // true here, false rest

console.log(undefined == 0); // false in all
console.log(undefined > 0);
console.log(undefined < 0);

console.log(null == undefined); //sweet couple
console.log(null === undefined);

// === strict check

console.log("2" === 2);
