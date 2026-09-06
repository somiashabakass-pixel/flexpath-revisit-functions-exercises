/*
Exercise 1: Function Declarations vs. Expressions and Hoisting

Problem:

Write code that demonstrates the difference in hoisting behavior between 
function declarations and function expressions. 

Specifically, attempt to call both a function declaration and 
a function expression before they are defined, and explain the results.
*/

// Function Declaration
console.log(declaredFunction()); // This will work because function declarations are hoisted

// Function Expression
console.log(expressionFunction()); // This will throw a TypeError because function expressions are not hoisted
var expressionFunction = function () {
  return "This is a function expression";
};
