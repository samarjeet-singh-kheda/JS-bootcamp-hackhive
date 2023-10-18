const coding = ["js", "ruby", "java", "python", "cpp"];

//! "for each" performs a specified action for each element

/***************************************

SYNTAX-->  array.forEach(call-back-function);

callback function is a function without name

it's arguments are (array_item, index, entire_array) in this order strictly

****************************************/

//! callback don't change array, it remains the same

coding.forEach(function (item) {
  //normal function ---> function name(para){}
  item = item + "01"; // callback ----> function (para){}
  //   console.log(item);
});
// console.log("\n");

coding.forEach((item) => {
  // normal function ---> name = (para) => {}
  //   console.log(item);      // callback ---> (para) => {}
});
// console.log("\n");

function printMe(item) {
  item = item + " modify"; // no modification
  console.log(item);
}

// coding.forEach(printMe);  //function is only referenced not invoked
// console.log(coding);

// TODO
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName); // way to access properties of array with objects
});
