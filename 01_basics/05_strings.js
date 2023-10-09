const name1 = "samar";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(
  `Hello my name is ${name1.toUpperCase()} and my repo count is ${repoCount}`
);

// const gameName = new String("samardotfight");

// console.log(gameName[3]);
// console.log(gameName.__proto__);

const gameName = new String("hi-tes-h hc-co_m"); //

// console.log(gameName[0]); //string forms a key-value pair with 0: 'h', 1:'i', 2:'t'......
// console.log(gameName.__proto__); //{}

// console.log(gameName.length);   // all the methods can be used without prototype
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2)); //'t'
console.log(gameName.indexOf("t")); //2

const newString = gameName.substring(0, 4); //start to end-1
console.log(newString); //ignores -ve values & start with 0

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = " \t  hitesh  \n  ";
console.log(newStringOne);
console.log(newStringOne.trim()); //trims whitespace & line terminators (\t, \n)
console.log(newStringOne.trimEnd());
console.log(newStringOne.trimStart());

const url = "https://samar.com/samar%20singh";

console.log(url.replace("%20", "-"));

console.log(url.includes("samar"));
console.log(url.includes("sundar"));

console.log(gameName.split("-")); //splits all the elements in array which are on any side of "-"
console.log(gameName.split(" "));
console.log(gameName.split("_"));
