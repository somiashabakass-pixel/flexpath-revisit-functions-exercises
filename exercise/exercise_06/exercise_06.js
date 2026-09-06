/*
Exercise 6: Pass-by-Value vs. Pass-by-Reference

Problem:

Write a function `modifyValues` that attempts to modify a number and 
an object passed to it. 

Demonstrate how primitives and objects are handled differently 
when passed as arguments to a function.\
*/
function modifyValues(primitive, obj) {
  primitive += 10; // Attempt to modify the primitive value
  obj.value += 10; // Modify the property of the object
}
const num = 5; // Primitive value
const myObj = { value: 5 }; // Object
console.log("Before modification:");
console.log("Primitive:", num); // Outputs: 5
console.log("Object:", myObj);// Outputs: { value: 5 }
modifyValues(num, myObj);
console.log("After modification:");
console.log("Primitive:", num); // Outputs: 5 (unchanged)
console.log("Object:", myObj); // Outputs: { value: 15 } (changed)
// Explanation:
// In JavaScript, primitive values (like numbers) are passed by value, 
// meaning that a copy of the value is made and modifications inside the 
// function do not affect the original variable.