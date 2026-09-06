/*
Exercise 9: Rest Parameters

Problem:

Rewrite the `multiplyAll` function from Exercise 8 using 
rest parameters instead of the arguments object.
*/
function multiplyAll(...numbers) {
  // Use rest parameters to accept any number of arguments
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    // Iterate through the rest parameters
    product *= numbers[i]; // Multiply the current number to the product
  }
  return product;
}
console.log(multiplyAll(1, 2, 3, 4)); // Outputs: 24
console.log(multiplyAll(5, 10)); // Outputs: 50
