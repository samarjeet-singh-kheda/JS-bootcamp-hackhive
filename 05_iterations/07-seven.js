const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//! it is used to perform operations, it does not filter out rather it returns the value of condition checked or operation performed

// const newNums = myNumers.map( (num) => { return num + 10})
let newNums = myNumers.map((num) => {
  if (num > 5) {
    return num;
  }
});

/*
[
  undefined, undefined,
  undefined, undefined,
  undefined, 6,
  7,         8,
  9,         10
]
 */

// newNums = myNumers
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num >= 40);

console.log(newNums);
