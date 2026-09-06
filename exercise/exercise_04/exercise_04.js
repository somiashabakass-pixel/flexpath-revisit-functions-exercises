/*
Exercise 4: Recursive Function to Flatten Nested Arrays

Problem:

Write a recursive function `flattenArray` that takes a deeply nested array 
and returns a new, flat array containing all the elements. 

Explain the importance of the base case in your recursive function.
*/

function flattenArray(arr) {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat = flat.concat(flattenArray(arr[i]));
    } else {
      flat.push(arr[i]);
    }
  }
  return flat;
}
const nestedArray = [1, [2, [3, [4]], 5]];
console.log(flattenArray(nestedArray)); // Outputs: [1, 2, 3, 4, 5]
console.log(flattenArray([1, [2, 3], [4, [5, 6]]])); // [1, 2, 3, 4, 5, 6]
debugger;
/*
The base case is crucial in a recursive 
function because it defines the condition under which the recursion stops.
 Without a base case, the function would continue to call itself indefinitely,
 leading to a stack overflow error. In the context of flattening an array, 
 the base case occurs when the function encounters an element that is not an array, 
 at which point it can simply add that element to the flat array. */
