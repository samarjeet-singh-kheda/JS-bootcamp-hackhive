//! for in loop access keys and the values can be accessed with structure[key]
//! it works for string, array and objects not iterable for map

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

//! "for in" is used for objects
for (const key in myObject) {
  //   console.log(`${key} shortcut is for ${myObject[key]}`);
}
// objects are accessed by myObject[key]

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  // console.log(programming[key]); // OUTPUT--> 0 1 2 3 4 5 6 ....
  console.log(programming[key]); // OUTPUT--> js rb py java cpp
}

const greetings = "Hello world!";
for (const greet in greetings) {
  console.log(`Each character is ${greet}`); // OUTPUT--> 0 1 2 3 4 5 6 ....
}

//! not iterable for map, but don't give error
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

for (const key in map) {
  console.log(key);
}
