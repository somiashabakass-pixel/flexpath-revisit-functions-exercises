/*
Exercise 8: Using the Arguments Object

Problem:

Write a function `multiplyAll` that accepts any number of numerical arguments 
and returns their product. 

Use the 'arguments' object to handle an indefinite number of arguments.
*/
function multiplyAll() {
  let product = 1;
  for (let i = 0; i < arguments.length; i++) {
    // Use the 'arguments' object to access each argument
    product *= arguments[i]; // Multiply the current argument to the product
  }
  return product;
}
console.log(multiplyAll(1, 2, 3, 4)); // Outputs: 24
console.log(multiplyAll(5, 10)); // Outputs: 50
