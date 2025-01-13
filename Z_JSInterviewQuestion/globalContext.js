
/* Global context create hota hota h jab bhi hm js me code runn krte h iske 2 part hote h 1-memory part jha pr samse pahle sare memory
initilize hote h and 2-part hota h code phase jha pr code ka execution hota h , and jab hmare code me koi function hota h tho starting 
phase me wo bhi hmare var ka part hota h and memory part me sara function ka bodypart aa jata ha. and jab ye execute hota ha uss time
ye code phase me fir se apna ak global context banata h like memory and code like that and iske complete hone ke bad ye automaticall
delete bhi hgo jata ha jisse hm iske variable ko future me use nhi kr pate h.
/* console.log("a" +a)
var a=20 */

/* console.log("Global Execution context starts")
var globalVariable="I am a global variable"
function globaleFunction(){
    console.log("Inside global function")
}
console.log(globalVariable)
globaleFunction()
console.log("Global Execution Context end") */

/* 
global Execution context starts
I am a global variable
Inside global function
Global execution contextr end
(but agar hm function ko jab call krte h tho ye 
*/

//----------------------------------------------------//
/* x=10                      In that case we getting ReferenceError: Cannot access 'x' before initialization due to TDZ temporal dead zone
console.log("value of x" +  x)
let x=20 */