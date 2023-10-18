// Immediately Invoked Function Expressions (IIFE)
//! -------> ( // function ) (argument1, arg2, .....);

//! used when either, we want DB to immediately connect to a file
//! or when we want, global variable to not pollute the local function which needs to be invoked immediately

(function chai() {
  //! named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  //! unnamed IIFE
  console.log(`DB CONNECTED TWO by ${name}`);
})("kite man"); //argument

(() => {
  console.log(`DB CONNECTED three`);
})("juju"); //stil works
