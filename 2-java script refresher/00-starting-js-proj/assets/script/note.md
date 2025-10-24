for finding index we use arrow funtion like this findIndex((item)=>item === "sleeping");
for making array to object by mapping =  hobbies.map((item)=>({text : item})); for adding text in array;and covert it to objecct by wrapping up '{}' inide a '()' and adding  after arrow funtion   
for destucturing arrray we use '[ ]' before '='ex: const [firstName,lastName  ]=["RAJ","KUNDAN"];
for destucturing object we use '{ }' before '='ex: const {name,age}={
    name:"murtaza",
    age:20,
};
26. The Spread Operator-->'...' use to joing two array when added like this "const mergedHobbies=[...hobbies,...newHobbies];"
and also two object when joined like this "const mergedUser = {...user,...extendedUser};"




🧠 JavaScript Refresher — Documentation
Reference File

This document summarizes all JavaScript concepts revised before learning React, based on the annotated code file.

1. Import Statements
// import { apiKey } from "./utils";


ES Modules allow you to import/export data and functions between files.

Commonly used for modular code in large projects or React components.

2. Functions & Parameters
function greet() {
  console.log("hello.com");
}
greet();


Concept:
Functions allow code reuse and logical separation.

With Parameters & Default Values
function greet(userName, message = "Hello!!") {
  console.log("userName:", userName);
  console.log("message:", message);
}

greet("Murtaza");
greet("Max", "Hello, Whatsup?");


You can assign default values to parameters (message = "Hello!!").

Arguments override defaults when passed.

Returning Values
function createGreeting(userName, message = "Hello!!") {
  return "Hi, I am " + userName + ". " + message;
}
const greeting1 = createGreeting("Max");
const greeting2 = createGreeting("Murtaza", "Hello, Whatsup?");


Functions can return computed strings, numbers, or objects.

3. Basic JS Exercise: Working with Functions
function combine(a, b, c) {
  let result = a * b / c;
  return result;
}
console.log(combine(2, 2, 2));


Task: Create a function that performs mathematical operations and returns results — helps understand parameters, scope, and return values.

4. Arrow Functions (ES6)
let arrowFunc = (userName, message) => {
  console.log("hello.com");
  return "Hi, I am " + userName + " & Message is " + message;
};


Shorter function syntax.

Does not have its own this or arguments.

Commonly used in React components.

5. Objects & Methods
const user = {
  name: "murtaza",
  age: 12,
  class(classs) {
    console.log("12th");
    return classs;
  },
};


Concept:
Objects can hold key-value pairs and even functions (methods).

Accessing Values:
console.log(user.name);
user.class(22);

6. Classes (Blueprints for Objects)
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greer() {
    console.log("hi");
  }
}

const user1 = new User("murtaza", 20);
console.log(user1);


Concept:
Classes define reusable templates for creating objects.
They are syntactic sugar over constructor functions.

7. Arrays & Array Methods
const hobbies = ["Sports", "Cooking", "sleeping"];

Common Methods:
hobbies.push("singing");  // add
hobbies.pop();            // remove last
const index = hobbies.findIndex(item => item === "sleeping");

Transforming Arrays with .map()
const newHobbies = hobbies.map(item => item + " fav");
const objHobbies = hobbies.map(item => ({ text: item }));


Use Case:
.map() is very important in React — used to render dynamic lists (e.g., <li> elements).

8. Destructuring (Arrays & Objects)
Array Destructuring
const [firstName, lastName] = ["RAJ", "KUNDAN"];


Extracts array elements directly into variables.

Object Destructuring
const { name: userName, age } = {
  name: "murtaza",
  age: 20,
};


Renames and extracts properties from objects.

9. Spread Operator (...)
const hobbies = ["Sports", "Cooking", "sleeping"];
const newHobbies = ["Reading"];
const mergedHobbies = [...hobbies, ...newHobbies];


Concept:
The spread operator copies array/object contents into another structure.

For Objects
const user = { name: "murtaza", age: 20 };
const extendedUser = { class: "12th", subject: "CSE" };
const mergedUser = { ...user, ...extendedUser };

10. Control Structures
Conditional Statements
const password = prompt("enter your password");

if (password === "Hello") {
  console.log("Hello works");
} else if (password === "hello") {
  console.log("hello works");
} else {
  console.log("wrong password");
}

Loops
const hobbies = ["Sports", "Cooking", "sleeping"];
for (const hobby of hobbies) {
  console.log(hobby);
}

11. Using Functions as Values
function handleTimeout() {
  console.log("Timed out....");
}
const handleTimeout2 = () => {
  console.log("Timed out.... again");
};

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => console.log("more Timed Out"), 4000);

Passing Functions as Parameters
function greater(greetFn) {
  greetFn();
}

greater(() => console.log("Welcome User"));


Functions can be passed as values or arguments.

Foundation for callbacks and React event handlers.

12. Nested Functions (Functions Inside Functions)
function init() {
  function greet() {
    console.log("Hello User!");
  }
  greet();
}
init();


Concept:
Inner functions are only accessible inside their parent function (scoped locally).
This pattern is common in React — e.g., defining helper functions inside components.

13. Reference vs Primitive Values

(Introduced but not implemented in code)

Primitive values: Stored directly (e.g., string, number, boolean).

Reference values: Objects and arrays are stored by reference, not by value.

Copying or comparing them affects how React detects changes and re-renders.