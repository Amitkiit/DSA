/* 1. call()
Purpose: Invokes a function immediately and explicitly sets the this context to the specified object.
Syntax: func.call(thisArg, arg1, arg2, ...)
2. apply()
Purpose: Similar to call, but it takes arguments as an array (or array-like object) instead of individual arguments.
Syntax: func.apply(thisArg, [arg1, arg2, ...])
3. bind()
Purpose: Creates a new function with the this context permanently bound to the specified object. Unlike call and apply, bind does not invoke the function immediately—it returns a new function that can be called later.
Syntax: func.bind(thisArg, arg1, arg2, ...) */

// this keyword is use for self reference like apne object
// ko point krne ke liye
const userDetails = {
  name: "amit",
  age: "28",
  Destignation: "Nodejs developer",
  // printDetails:function(){
  //     console.log(this.name)
  // }
};
let printDetails = function (state,country){
  console.log(this.name+state+country)
};
printDetails.call(userDetails)
const userDetails2 = {
  name: "sumit",
  age: "27",
  Destignation: "Nodejs developer",
  // printDetails:function(){
  //     console.log(this.name)
  // }
};
// printDetails.call(userDetails2,"delhi","india")  way to call
// printDetails.call(userDetails2,["delhi","India"])   way to use appliy in array form here we take argumnet inside the array

//Bind  same a call but we store value in one variable and then call
let newFun= printDetails.bind(userDetails2,"delhi","india")
newFun()


//==============================================================//
/* In Node.js, functions play a crucial role in defining reusable and modular code. They are used to encapsulate a block of code and can be invoked multiple times with different arguments. Functions in Node.js can be created using function declarations or function expressions. Let’s delve into the details of functions in Node.js with a coding example:

1-  Function Declarations:
. Function declarations define named functions using the `function` keyword. They can be called before their actual definition in the code.
// Function Declaration
function greet(name) {
. console.log(`Hello, ${name}!`);
}

// Function Invocation
greet("John");
In the above code, the `greet` function is declared with the `function` keyword. It takes a parameter `name` and logs a greeting message to the console. The function is invoked with the argument `”John”`.

2. Function Expressions:

. Function expressions define functions as values assigned to variables or properties. They can be anonymous or named.

// Anonymous Function Expression
const multiply = function (a, b) {
. return a * b;
};

// Named Function Expression
const divide = function divideFn(a, b) {
. return a / b;
};

console.log(multiply(5, 3)); // Output: 15
console.log(divide(10, 2)); // Output: 5
In the above code, the `multiply` and `divide` functions are defined using function expressions. The `multiply` function is anonymous, while the `divide` function has a name. They are assigned to variables and invoked accordingly.

3. Arrow Functions:

. Arrow functions provide a concise syntax for writing functions, especially for one-liner functions. They have a shorter syntax and retain the lexical `this` binding.

// Arrow Function
const sum = (a, b) => a + b;

console.log(sum(3, 4)); // Output: 7
In the above code, the `sum` function is defined using an arrow function. It takes two parameters and returns their sum. The function is invoked with the arguments `3` and `4`.

4. Higher-Order Functions:

. In Node.js, functions can be passed as arguments to other functions and returned as values. These are known as higher-order functions.

// Higher-Order Function
function operation(a, b, callback) {
. return callback(a, b);
}
function multiply(a, b) {
. return a * b;
}

console.log(operation(5, 3, multiply)); // Output: 15
In the above code, the `operation` function is a higher-order function that takes two numbers and a callback function. It invokes the callback function with the given numbers. The `multiply` function is passed as a callback, resulting in the multiplication of `5` and `3`.

Functions in Node.js provide code modularity, reusability, and a way to encapsulate logic. They allow you to define behavior that can be invoked at different points in your program. Functions can take parameters, return values, and be used in various ways, such as higher-order functions. Understanding functions is crucial for effective Node.js programming.

 */


/* 1. Arrow Function
Arrow functions are introduced in ES6 and provide a more concise syntax for writing functions. They have unique characteristics regarding this binding and are often used for shorter, simpler functions.

Key Characteristics:
Syntax: Use => (arrow) instead of the function keyword.

javascript
Copy
Edit
const add = (a, b) => a + b;
this Binding:

Arrow functions do not bind their own this.
They inherit this from the surrounding lexical scope (where the function is defined).
javascript
Copy
Edit
const obj = {
    value: 10,
    getValue: () => this.value // Arrow function: `this` refers to global object
};
console.log(obj.getValue()); // undefined
Usage:

Useful in callbacks, array methods (map, filter), and when you don’t need your own this.
Cannot Be Used as a Constructor:

You cannot use new with arrow functions.
javascript
Copy
Edit
const Arrow = () => {};
const obj = new Arrow(); // Error: Arrow is not a constructor
Implicit Return:

Single-expression functions can omit the return keyword.
javascript
Copy
Edit
const square = x => x * x; // Implicit return
2. Anonymous Function
Anonymous functions are functions without a name. They are typically used as callbacks or assigned to variables.

Key Characteristics:
Syntax: Written without a name.

javascript
Copy
Edit
const multiply = function (a, b) {
    return a * b;
};
this Binding:

Anonymous functions bind this to the object they are invoked on.
When called in the global scope, this refers to the global object (window in browsers).
javascript
Copy
Edit
const obj = {
    value: 20,
    getValue: function () {
        return this.value; // `this` refers to `obj`
    }
};
console.log(obj.getValue()); // 20
Usage:

Used as callbacks, event handlers, or in places where a function reference isn’t reused.
javascript
Copy
Edit
setTimeout(function () {
    console.log('Anonymous function executed');
}, 1000);
Can Be Used as a Constructor:

Anonymous functions can be invoked using new.
javascript
Copy
Edit
const Obj = function (name) {
    this.name = name;
};
const obj = new Obj('John');
console.log(obj.name); // John
3. Normal Function
Normal functions (or named functions) are the most standard type of function, defined with the function keyword and often given a name for reuse and debugging.

Key Characteristics:
Syntax:

javascript
Copy
Edit
function greet(name) {
    return `Hello, ${name}`;
}
this Binding:

Normal functions have a dynamic this context.
this depends on how the function is called:
Regular Call: this refers to the global object (or undefined in strict mode).
Object Method: this refers to the object.
Constructor Call: this refers to the new instance.
javascript
Copy
Edit
function showThis() {
    console.log(this);
}
showThis(); // Global object (or undefined in strict mode)
Usage:

Commonly used for defining reusable logic, constructors, and object methods.
Can Be Used as a Constructor:

Named functions can be used with new to create objects.
javascript
Copy
Edit
function Person(name) {
    this.name = name;
}
const john = new Person('John');
console.log(john.name); // John
Comparison Table
Feature	Arrow Function	Anonymous Function	Normal Function
Syntax	Concise, => syntax	function keyword, no name	function keyword, often named
this Binding	Lexical (inherits parent)	Dynamic (depends on caller)	Dynamic (depends on caller)
Name	Always anonymous	Anonymous	Typically named
Constructor Usage	Not a constructor	Can be a constructor	Can be a constructor
Implicit Return	Allowed	Not allowed	Not allowed
Use Case	Short functions, callbacks	One-off tasks, callbacks	Reusable logic, constructors
 */


//------------------class-based function --------
// A class-based function in Node.js is a function that is defined within a class in JavaScript. Classes are templates for JavaScript objects that allow for the creation of hierarchies of objects and the inheritance of properties-------------------//
// class PasswordGeneratorService {
//   generate() {
//     const length = 8;
//     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let password = "";
//     for (let i = 0, n = charset.length; i < length; ++i) {
//       password += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return password;
//   }
// }