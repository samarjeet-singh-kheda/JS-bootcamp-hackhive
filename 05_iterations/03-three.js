//! for of loop --> iterable for arrays, strings and map, not for object
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  //   console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  //   console.log(`Each character is ${greet}`);
}

//! Maps ---> holds key-value pairs, remembers their order, all pairs are unique
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
// map.set("IN", "India_v2");
map.set("FR", "France");
map.set("IN09", "India");

//! if any of "value" is changed then it remember the last one but at the exact position of the original regardless of where the alteration took place
// console.log(map);
/*       OUTPUT   ------>
Map(5) {
    'IN' => 'India',
    'USA' => 'United States of America',
    'Fr' => 'France',
    'FR' => 'France',
  'IN09' => 'India'
}
*/

// prints only keys
for (const [countryCode] of map) {
  console.log(countryCode); //OUTPUT --> IN USA Fr FR IN09
}

// prints key and values as multiple arrays
for (const i of map) {
  console.log(i); //OUTPUT --> [ 'IN', 'India' ] [ 'USA', 'United States of America' ] [ 'Fr', 'France' ]
}

// prints key and values as specified
for (const [countryCode, countyName] of map) {
  console.log(countryCode, ":-", countyName); //OUTPUT --> Fr :- France FR :- France IN09 :- India
}

for (const [key, value] of map) {
  // console.log(key, ':-', value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

//! for of loop --> not iterable for object
for (const [key, value] of myObject) {
  console.log(key, ":-", value);
}
