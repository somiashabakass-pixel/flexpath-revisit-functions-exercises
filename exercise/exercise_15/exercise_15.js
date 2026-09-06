/*
Exercise 15: IIFE and Module Pattern

Problem:

Implement a simple module called `stringModule` using an IIFE. 

The module should expose methods `toUpperCase`, 
`toLowerCase`, and `capitalize`, 
operating on a private 'string' variable. 

Demonstrate that the private 'string' cannot be accessed directly.
*/
const stringModule = (function () {
  let string = ""; // Private variable
  return {
    setString: function (str) {
      // Method to set the private string variable
      string = str;
    },
    toUpperCase: function () {
      // Method to convert the private string to uppercase
      return string.toUpperCase();
    },
    toLowerCase: function () {
      return string.toLowerCase(); // Method to convert the private string to lowercase
    },
    capitalize: function () {
      return string.charAt(0).toUpperCase() + string.slice(1); // Method to capitalize the first letter of the private string
    },
  };
})();

// Testing the stringModule
stringModule.setString("hello world");
console.log(stringModule.toUpperCase()); // Outputs: "HELLO WORLD"
console.log(stringModule.toLowerCase()); // Outputs: "hello world"
console.log(stringModule.capitalize()); // Outputs: "Hello world"
