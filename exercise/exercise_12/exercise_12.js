/*
Exercise 12: Function Scope and Closures

Problem:

Create a function `createCounter` that returns another function. 

The returned function should increment and return a 'counter' variable 
that is not accessible from the global scope. 

Demonstrate how closures retain access to outer variables.
*/
function createCounter() {
  let counter = 0; // This variable is in the outer function's scope
  return function () {
    counter++;
    return counter;
  };
}
// Testing the createCounter function
const myCounter = createCounter();
console.log(myCounter()); // Outputs: 1
console.log(myCounter()); // Outputs: 2
console.log(myCounter()); // Outputs: 3
// The 'counter' variable is not accessible from the global scope, demonstrating closure.
