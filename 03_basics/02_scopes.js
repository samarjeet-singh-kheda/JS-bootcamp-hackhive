// let a = 10;
// const b = 30;
// var c = 40;

// console.log(a);
// console.log(b);
//  console.log(c);

var c = 300;

// scope is usually defined between { }, in case of function and if-else
// but for objects { } is simply object declaration
if (true) {
  let a = 10;
  const b = 30;
  //   var c = 40;
  c = 10000;
}

// console.log(a); // can't be accessed
// console.log(b); // since these two are defined in local scope, not global scope
// console.log(c); // var gets updated by both local scope 'var c=40' & 'c = 10000'
