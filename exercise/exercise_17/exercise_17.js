/*
Exercise 17: 'arguments' Object in Arrow Functions

Problem:

Demonstrate how the `arguments` object behaves differently in 
regular functions versus arrow functions by writing a 
function `compareArguments` that logs the `arguments` object in both cases.
*/
function compareArguments() {
  // Regular function
  function regularFunction() {
    console.log("Regular Function Arguments:", arguments);
  }

  // Arrow function
  const arrowFunction = () => {
    console.log("Arrow Function Arguments:", arguments);
  };

  regularFunction("arg1", "arg2", "arg3");
  arrowFunction("arg1", "arg2", "arg3");
}
console.log("Demonstrating 'arguments' in Regular vs Arrow Functions:");
compareArguments();
// Explanation:
// In regular functions, the `arguments` object is available and contains all the arguments passed to the function.
// In arrow functions, the `arguments` object is not available; it inherits from the enclosing scope, which may not have any arguments.
