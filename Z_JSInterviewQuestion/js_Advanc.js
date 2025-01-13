/* In your code, the variable b is assigned the value of a, but since a is a primitive value (a number), b gets a copy of a's value, not a reference. When you change a to 20, b still retains its original value of 10.

To achieve the behavior you're describing — where b changes whenever a changes — you'd need to use a reference type (like an object or an array), because primitive values (like numbers, strings, booleans) are assigned by value, and objects and arrays are assigned by reference.

Using Reference Types (Objects or Arrays)
To have both a and b refer to the same object, you can use an object or array. Here's how you can do it:

Example with Object
javascript
Copy code
let a = { value: 10 };
let b = a;  // Both 'a' and 'b' refer to the same object

a.value = 20;  // Modifying the 'value' property of the object

console.log("a", a);  // Output: { value: 20 }
console.log("b", b);  // Output: { value: 20 }
Explanation:
a and b both refer to the same object in memory. When you modify the value property of a, it is reflected in b as well because they both point to the same reference.
Example with Array
javascript
Copy code
let a = [10];
let b = a;  // Both 'a' and 'b' refer to the same array

a[0] = 20;  // Modifying the first element of the array

console.log("a", a);  // Output: [20]
console.log("b", b);  // Output: [20] */


//------------------------------------------
/* const a ={}  const b ={}

 a.data = {user_id:12345}
  const k = {...a,...b}
  a.data.user_id = 123457878
const c = a

console.log("c = ",c)

console.log("c = ",k) */

/* const k = { ...a, ...b };
The spread operator { ...a, ...b } creates a shallow copy of a and b, merging their properties.
 */