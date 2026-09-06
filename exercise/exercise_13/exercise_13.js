/*
Exercise 13: 'this' in Arrow Functions

Problem:

Create an object with a method defined using an arrow function and 
another method using a regular function. 

Inside each method, attempt to access a property of the object using `this`. 

Explain the results.
*/
const obj = {
  value: 42,
  arrowMethod: () => {
    // 'this' in arrow functions does not refer to the object, but to the enclosing scope (global or module)
    console.log("Arrow Method:", this.value); // Outputs: undefined
  },
  regularMethod: function () {
    // 'this' in regular functions refers to the object that called the method
    console.log("Regular Method:", this.value); // Outputs: 42
  },
};
obj.arrowMethod(); // Outputs: Arrow Method: undefined
obj.regularMethod(); // Outputs: Regular Method: 42
