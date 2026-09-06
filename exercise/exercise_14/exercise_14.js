/*
Exercise 14: Using bind(), call(), and apply()

Problem:

Write a function `greet` that accepts a 'greeting' message and logs it 
along with the person's 'name' (this.name). 

Create an object `user` with a 'name' property. 

Use the Function prototype methods call(), apply(), and bind() 
from the `greet` function to invoke `greet` with `user` as `this` 
and explain the differences.


Helpful Links:

`call` method documentation:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

`apply` method documentation:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

`bind` method documentation:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
*/
function greet(greeting) {
  console.log(greeting + ", " + this.name + "!");
}

const user = {
  name: "Alice",
};
const greetingMessage = "Hello";

// Using call()
greet.call(user, greetingMessage); // Outputs: Hello, Alice!

// Using apply()
greet.apply(user, [greetingMessage]); // Outputs: Hello, Alice!

// Using bind()
const greetUser = greet.bind(user);
greetUser(greetingMessage); // Outputs: Hello, Alice!
