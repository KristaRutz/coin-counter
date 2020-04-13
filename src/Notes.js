// IMMUTABILITY --------------------------------------
// No changing vars, no more LET.
// Only use "const" and make new variables when you want to "update" program.

// IMPERATIVE VERSUS DECLARATIVE PROGRAMMING --------
// Imperative programming: Explicitly stating every step the computer needs to take to return a result
// Declarative programming: Telling the computer the result we want and allowing it to decide how to return that result

//PURE FUNCTIONS ------------------------------------
// A pure function always returns an output.
// A pure function can not have side effects.
// Pure functions cannot rely on external variables or state.
// A pure function always returns the same answer for a given input

//FIRST CLASS CITIZEN FUNCTIONS -----------------------
// Assigning Functions as Arguments aka Callback Functions
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

// Functions Returning Functions aka making Higher Order Functions
function doAThing() {
  return function () {
    return "A thing was done.";
  };
}
doAThing()(); // > "A thing was done.";

// CLOSURES ----------------------------------------

// Closures are functions that have access to variables from an outer function

// Example 1
function welcome(salutation) {
  return function (yourName) {
    return `${salutation}! Nice to meet you, ${yourName}!`;
  };
}
const heyThere = welcome("Hey there");
heyThere("Joe"); // > "Hey there! Nice to meet you, Joe!"

const spanishGreeting = welcome("Buenos días!");
spanishGreeting("Joe"); // > "Buenos días! Nice to meet you, Joe!"

// Example 2
const multiplier = (numberToMultiplyBy) => {
  return (numberToMultiply) => {
    return numberToMultiplyBy * numberToMultiply;
  };
};
const doubler = multiplier(2);
// "doubler" stores a function that looks like this:
(numberToMultiply) => {
  return 2 * numberToMultiply;
};

// CURRYING ------------------------------------------
// Currying is rewriting a function that takes multiple arguments into a series of unary functions, or functions that each take one argument.

// uncurried
function aThingIMaybeLike(howMuchILikeIt, thing, reason) {
  return `I ${howMuchILikeIt} ${thing} because ${reason}.`;
}

aThingIMaybeLike("really like", "functional programming", "it's cool");

// curried
function aThingIMaybeLike(howMuchILikeIt) {
  return function (thing) {
    return function (reason) {
      return `I ${howMuchILikeIt} ${thing} because ${reason}.`;
    };
  };
}

aThingIMaybeLike("really like")("functional programming")("it's cool");

// MAP, REDUCE, and FILTER --------------------------------
// https://www.learnhowtoprogram.com/react/functional-programming-with-javascript-3399822d-e51a-4550-8a09-b2e81cf0a43d/map-reduce-and-filter-c941042b-c4b3-466d-855f-3cddc3e8aa9d

// MAP: Use Array.prototype.map() whenever you want to modify every element in an array.

//before mapping, we use loops for almost everything
const numArray = [1, 2, 3, 4, 5];
let doubledArray = [];
numArray.forEach(function (element) {
  doubledArray.push(element * 2);
});
doubledArray;

// mapping is more declarative than imperative. furthermore, it doesn't mutate the original but creates a new array.
const numArray = [1, 2, 3, 4, 5];
const doubledArray = numArray.map(function (element) {
  return element * 2;
});
doubledArray;

// use arrow functions to make it even more concise
const doubledArray = numArray.map((e) => e * 2);

// REDUCE: Use Array.prototype.reduce() whenever you want to "reduce" an array down to a single element.
// For a longer example of merging lists,

// Commonly used to sum arrays
const numArray = [3, 7, 5];
const summedArray = numArray.reduce(function (currentValue, element) {
  return element + currentValue;
}, 0);

// FILTER: Use Array.prototype.filter() whenever you want to filter an array based on certain conditions.
const numArray = [7, 14, 32, 8];
const filteredArray = numArray.filter((e) => e > 10);

// RECURSION ---------------------------------------------------

// Recursion is technique where a function may call itself one or more times before returning
// The 'base case' is the "met" conditional where the function stops calling itself
// The 'termination case' is a back-up to prevent an infinitely iterating recursive loop

const incrementCounter = (counter) => {
  // the termination condition:
  if (isNaN(counter)) {
    return;
  }
  // the base case/condition:
  if (counter >= 3) {
    return counter;
  }
  // the recursive call to itself:
  else {
    console.log(counter);
    return incrementCounter(counter + 1);
  }
};

incrementCounter(0);

//LIFO, which means "last in, first out." This is why the innermost function in the example above will complete first while the outermost function will complete last.

// incrementCounter() {
//   // This call will complete last.
//   return incrementCounter() {
//     // This call will complete second.
//     return incrementCounter() {
//       // This call will complete first.
//     }
//   }
// }

const recurseReverse = (string) => {
  if (string === "") {
    return "";
  } else {
    return recurseReverse(string.substring(1)) + string[0];
  }
};

const recurseReverse2 = (string, index) => {
  console.log("iteration #" + index);
  console.log(string);
  if (string === "") {
    console.log("(breakpoint)");
    return "";
  } else {
    console.log("> one level deeper");
    return (
      recurseReverse2(string.substring(1), index + 1) + `(${index})` + string[0]
    );
  }
};

// Tail Call optimization is the process by which a compiler can make a call to a function and use no additional stack space
