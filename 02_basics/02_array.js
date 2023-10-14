const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); //pushes in same array
// console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); //flash

// const allHeros = marvel_heros.concat(dc_heros); //concats in different array which is to be declared
// console.log(allHeros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]; //spread operator (glass example), in new array
console.log(all_new_heros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity); //exact depth of array should be used
console.log(real_another_array); //to flatline array in invidual elements
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

let real_another_array_2 = another_array.flat(1);
console.log(real_another_array_2); //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]

console.log(Array.isArray("samar"));
console.log(Array.from("samar")); // [ 's', 'a', 'm', 'a', 'r' ]
console.log(Array.from({ name: "samarjeet" })); // [], will return emty array unless it's specified that array should be of keys or values

let score1 = 100;
let score2 = 200;
let score3 = 300;
//returns new array from a set of elements
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
