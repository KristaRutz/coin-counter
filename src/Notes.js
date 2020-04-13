//IMMUTABILITY -----------
// No changing vars, no more LET.
// Only use "const" and make new variables when you want to "update" program.

// IMPERATIVE VERSUS DECLARATIVE PROGRAMMING --------
// Imperative programming: Explicitly stating every step the computer needs to take to return a result
// Declarative programming: Telling the computer the result we want and allowing it to decide how to return that result

//PURE FUNCTIONS ---------------------
// A pure function always returns an output.
// A pure function can not have side effects.
// Pure functions cannot rely on external variables or state.

//FIRST CLASS CITIZEN FUNCTIONS ------------

// Assigning Functions as Arguments
function add(num1, num2) {
  return num1 + num2;
}

function printResult(sum) {
  return `The value of this equation is ${sum}.`;
}

printResult(add(5, 7));

// Assigning Functions to Variables, aka Function Expressions
const funkyVariable = function (arg) {
  return arg;
};

funkyVariable("Hello!");

// Functions Returning Functions
function doAThing() {
  return function () {
    return "A thing was done.";
  };
}

doAThing()() > "A thing was done.";
