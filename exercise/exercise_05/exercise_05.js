/*
Exercise 5: Immediately Invoked Function Expressions (IIFE)

Problem:

Use an IIFE to create a module called `counterModule` that encapsulates a 
private variable 'count'. 

Expose methods `increment`, `decrement`, and `getValue` to 
manipulate and retrieve the value of 'count'. 

Demonstrate that 'count' is not accessible from the global scope.
*/
const counterModule = (function () {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getValue: function () {
      return count;
    },
  };
})();
// Testing the counterModule
counterModule.increment();
counterModule.increment();
console.log(counterModule.getValue()); // Outputs: 2
counterModule.decrement();
console.log(counterModule.getValue()); // Outputs: 1
// Demonstrating that 'count' is not accessible from the global scope
console.log(typeof count); // Outputs: 'undefined'
