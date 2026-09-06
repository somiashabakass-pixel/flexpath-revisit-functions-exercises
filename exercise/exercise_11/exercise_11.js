/*
Exercise 11: setTimeout and Closures

Problem:

Using a for loop, schedule console logs of the numbers from 1 to 5 with a 
delay of 1 second between each using setTimeout. 

Explain the issue with closures in this context if you use `var` to declare
your for loop index variable and how to fix it.
*/
for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i); // This will log 6 for all iterations due to closure issue
  }, i * 1000);
}
//to fix the closure issue, we can use `let` instead of `var` to declare the loop index variable, as `let` has block scope and will create a new binding for each iteration of the loop.
for (let j = 1; j <= 5; j++) {
  setTimeout(function () {
    console.log(j); // This will log 1, 2, 3, 4, 5 correctly
  }, j * 1000);
}
