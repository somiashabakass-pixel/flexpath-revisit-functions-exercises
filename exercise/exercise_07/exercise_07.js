/*
Exercise 7: Default Parameters

Problem:

Create a function `createUser` that accepts two parameters: name and role, 
with role defaulting to the string 'guest' if not provided or if explicitly 
passed as undefined. 

Demonstrate how default parameters work with various argument values, 
including null and undefined.
*/
function createUser(name, role = "guest") {
  return { name, role };
}
console.log(createUser("Alice")); // Outputs: { name: 'Alice', role: 'guest' }
console.log(createUser("Bob", "admin")); // Outputs: { name: 'Bob', role: 'admin' }
console.log(createUser("Charlie", undefined)); // Outputs: { name: 'Charlie', role: 'guest' }
console.log(createUser("David", null)); // Outputs: { name: 'David', role: null }
