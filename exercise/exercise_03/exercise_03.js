/*
Exercise 3: Using the Function Constructor

Problem:

Use the Function constructor to create a function dynamically that 
computes the factorial of a number. 

The function should be named `dynamicFactorial` and accept a single parameter 'n',
which is an integer.
*/
const dynamicFactorial = new Function(
  "n",
  `
    if (n < 0) {
        throw new Error("Input must be a non-negative integer");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * dynamicFactorial(n - 1);
`,
);
