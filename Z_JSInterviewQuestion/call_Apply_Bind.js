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

