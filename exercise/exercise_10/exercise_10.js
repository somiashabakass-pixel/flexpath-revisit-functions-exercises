/*
Exercise 10: Higher-Order Functions and Callbacks

Problem:

Implement a higher-order function `processArray` that takes an array and 
a callback function. 

The function should apply the callback to each element of the array and 
return a new array with the results. 

Use this function to square each element in an array of numbers.
*/
function processArray(array, callback) {
  // Higher-order function that takes an array and a callback
  const result = []; // Initialize an empty array to store the results
  for (let i = 0; i < array.length; i++) {
    // Iterate through each element of the input array
    result.push(callback(array[i])); // Apply the callback function to the current element and push the result to the new array
  }
  return result;
}
function square(num) {
  // Callback function that squares a number
  return num * num;
}
const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Outputs: [1, 2, 3, 4, 5]
const squaredNumbers = processArray(numbers, square);
console.log(squaredNumbers); // Outputs: [1, 4, 9, 16, 25]
