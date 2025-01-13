/* Key Differences
Feature	                     slice	                                                splice
Purpose	                   Extracts a portion of the array.	         Modifies the array (add/remove/replace).
Returns	                   A new array with extracted elements.	     An array of removed elements.
Mutates	                   Does not modify the original array.	      Modifies the original array.
 */
//----------------------------slice----------------------------------------------//
/* const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Extracting a portion
const slicedFruits = fruits.slice(1, 4);     
console.log(slicedFruits); // ['banana', 'cherry', 'date']

// Original array remains unchanged
console.log(fruits); // ['apple', 'banana', 'cherry', 'date', 'elderberry']
 */

//---------------------------splice=----------------------------------------------------//

/* const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Remove 2 elements starting from index 1
const removedFruits = fruits.splice(1, 2);
console.log(removedFruits); // ['banana', 'cherry']

// Original array is modified
console.log(fruits); // ['apple', 'date', 'elderberry'] */
