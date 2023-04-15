/**  Promise with detials */

//=====================Example of Promises==================================//
// const myPromise = new Promise((resolve, reject) => {       //example of the promises
//   // Some asynchronous operation
//   const randomNumber = Math.floor(Math.random() * 10);
//   if (randomNumber % 2 === 0) {
//     resolve(randomNumber);
//   } else {
//     reject('Sorry, the number is odd.');
//   }
// });

// myPromise
//   .then((result) => {oiyt
//     console.log(`The number is even: ${result}`);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { name: "John", age: 30 };
//       resolve(data);
//     }, 2000);
//   });
// };

// fetchData()
//   .then((data) => {
//     console.log("Data fetched successfully:", data);
//   })
//   .catch((error) => {
//     console.log("Error fetching data:", error);
//   });

// let promise = new Promise(function(resolve, reject) {
//     resolve("I am surely going to get resolved!");
  
//     reject(new Error('Will this be ignored?')); // ignored
//     resolve("Ignored?"); // ignored
//   });
//   promise.then(
//     (result) => { 
//        console.log(result);
//     },
//     (error) => { 
//        console.log(error);
//     }
//   );



//   new XMLHttpRequest
// function getPromise(URL) {
//     let promise = new Promise(function (resolve, reject) {
//       let req = new XMLHttpRequest();
//       req.open("GET", URL);
//       req.onload = function () {
//         if (req.status == 200) {
//           resolve(req.response);
//         } else {
//           reject("There is an Error!");
//         }
//       };
//       req.send();
//     });
//     return promise;
//   }

//   const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';

// // We have discussed this function already!
// let promise = getPromise(ALL_POKEMONS_URL);

// const consumer = () => {
//     promise.then(
//         (result) => {
//             console.log({result}); // Log the result of 50 Pokemons
//         },
//         (error) => {
//             // As the URL is a valid one, this will not be called.
//             console.log('We have encountered an Error!'); // Log an error
//     });
// }

// consumer();

  //const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';

  //=========================================Callback function with example =======================================================//
  /**The benefit of using a callback function is that you can wait for the result of a previous function call and then execute another function call. In this example,
   *  we are going to use the setTimeout() method to mimic the program that takes time to execute, such as data coming from the server. */
  // function
// function greet(name) {                    
//     console.log('Hi' + ' ' + name);
// }

// greet('Peter'); // Hi Peter            // normal function


// function
// function greet(name, callback) {        // Example of callback function
//     console.log("this is pitter");
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);

//  program that shows the delay in execution

// function greet() {
//     console.log('Hello world');
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function
// setTimeout(greet, 2000);
// sayName('John');

/**In the above example, the second function does not wait for the first function to be complete. 
 * However, if you want to wait for the result of the previous function call before the next statement is executed, you can use a callback function. For example, */

// Callback Function Example
function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}
// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);














