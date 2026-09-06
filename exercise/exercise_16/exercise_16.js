/*
Exercise 16: Function Constructors and Prototypes

Problem:

Create a constructor function `Person` that accepts 'name' and 'age'. 

Add a method `introduce` to its prototype that returns a string 
introducing the person. 

Demonstrate how instances share methods through the prototype.
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  // Adding a method to the prototype of Person
  return "Hi, I'm " + this.name + " and I'm " + this.age + " years old."; // This method is shared across all instances of Person
};
// Testing the Person constructor and its prototype method
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);
console.log(person1.introduce()); // Outputs: Hi, I'm Alice and I'm 30 years old.
console.log(person2.introduce()); // Outputs: Hi, I'm Bob and I'm 25 years old.
