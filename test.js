// import fs from 'fs-promise'
// async function printFiles () {
//   const files = await getFilePaths() // Assume this works fine
//   files.forEach(async (file) => {
//     const contents = await fs.readFile(file, 'utf8')
//     console.log(contents)
//   })
// }
// printFiles()

// let a = 'my name is amit'
// console.log(a.split(' '))
// function fullReverse(s){
//     if(s.length<=1) return s;
//     return fullReverse(s.slice(1)) + s[0]
// }

// function reverse(str){
//     let a = str.split(' ')
//     let result =[]
//     let i=0
//     while(i<str.length){
//         result +=fullReverse(a[i])
//         i++

//     }

// let a =[5,15,35,20,1]  //1,5,15,20,35

// const sumArray = function(arr){
//     let start =0
//     let nextOne = 1
//     let count =0
//     while(start<nextOne){
//         //let x = arr[start]+arr[nextOne]
//         for(i=2;i<arr.length;i++){
//             let x = arr[start]+arr[nextOne]
//             if(x==arr[i]){
//                 count++

//             }

//         }

//     }

// }
// console.log(sumArray([5,15,35,20,1]))

// function frequencySort(nums) {
//     // Step 1: Create a map to store frequency of each element
//     const freqMap = new Map();
//     for (let num of nums) {
//       freqMap.set(num, freqMap.get(num) + 1 || 1);
//     }
//     // Step 2: Sort the array based on frequency
//     nums.sort((a, b) => {
//       const freqA = freqMap.get(a);
//       const freqB = freqMap.get(b);
//       if (freqA === freqB) {
//         // Step 3: For same frequency, sort by val
//         return a - b;
//       } else {
//         return freqA - freqB;
//       }
//     });
//     return nums;
//   }

//   // Example usage
//   console.log(frequencySort([1, 1, 2, 2, 2, 3])); // Output: [3, 1, 1, 2, 2, 2]
//   console.log(frequencySort([3, 1, 1, 2, 2, 2])); // Output: [3, 1, 1, 2, 2, 2]

// const n1 ={
//     data:100
// }
// const n2={
//     data:200
// }
// const n3={
//     data:300
// }

// n1.next = n2
// n2.next =n3
// console.log(n1)

//npm i exprees

// const exprees = require('express')
// const app = express()
// app.get('/',function(req,res){
//   res.send("request came successfully")
// })
// app.listen(3000,function(req,res){
//   console.log(" server is connecting successfully")
// })


//conect the server without using the express
// const http = require('http')
// const hostname = '127.0.0.1'
// const port = 3000
// const server = http.createServer((req,res)=>{
//   res.statusCode=200
//   res.setHeader('x-api-key','text/plain')
//   res.end('hello world ')
// })
// server.listen(port,hostname,()=>{
//   console.log("hi all my server is conecting ")
// })


// let resultMap = new Map();
//    let stack = [];


//    for(let i=0;i<nums2.length;i++){
     
//        let n = stack.length;


//        while(stack.length != 0 && nums2[i] > stack[n-1]){
//            resultMap.set(stack.pop(), nums2[i]);
//            n = stack.length;
//        }
//        stack.push(nums2[i]);
//    }


//    for(let i=0;i< nums1.length;i++){


//        nums1[i] = resultMap.get(nums1[i]) || -1;
//    }


//    return nums1;

// var nextGreaterElements = function(nums) {
//   let n = nums.length
//   let stack=[]
//   let array = new Array(n).fill(-1)
//   for(let i=0;i<2*n;i++){
//       let stackL = stack.length
//       let number = nums[i%n] 
//       while(stackL !==0 && number > nums[stack[stackL-1]]){
//           array[stack.pop()] = number
//           stackL = stack.length

//       }
//       if(i<n){
//           stack.push(i)
//       }
//   }
//   return array
// };

// how to create a linkedlist

// class Node{
//     constructor(val){
//         this.value = val
//         this.next = null
//     }
// }
// var node = new Node(12)
// node.next = new Node(15)
// var amit = node.next
// amit.next = new Node(20)
// var add = new Node(18)
// node.next = add

// add.next = new Node(20)

// console.log(node)


// Make arrray as linked list
// class Node{
//     constructor(val){
//         this.value = val
//         this.next = null
//     }
// }
// let arr = [2,5,8,3,4]
 
// let new_Node = new Node(arr[0])
// let pointer = new_Node;
// for(i=1;i<arr.length;i++){
//     let temp = new Node(arr[i])
//     pointer.next = temp
//     //pointer = pointer.next

// }
// console.log(new_Node)




// let a =[1,2,3,4,5,6,7,8]                  firts program
// let result= []
// for(i=0;i<3;i++){
//   result.push(a[i])
// }
// for(i=3;i<a.length;i++){
//   result.push(a[i])
// }
// console.log(result)
 
// function missingNumber(arr){                      // missing  number
//   let n = Math.max(...arr)
//   let result=[]
//   for(i=1;i<n;i++){
//     if(!arr.includes(i)){
//       result.push(i)
//     }
//   }
//   return result

// }
// console.log(missingNumber([1,4,5,6,8]))

// function palindrom(str){                  // check the palindrom
//   let n = str.split('')
//   for(let i=0;i<n.length;i++){
//   //console.log(n[n.length-i])
//     if(n[i]===n[n.length-i-1]) {
//       return true
//     }
//     else{
//       return false
//     }
//   }
  
// }
// console.log(palindrom('abcdcba'))

// function factorial(n){                   // factorial 
//   if(n<=1) return 1
//   return n*factorial(n-1)

// }
// console.log(factorial(4))

// function findLongestSubstring(str){
//     let s =str.split('')
//     let map = new Map()
//     for(i=0;i<s.length;i++){
//         if(map.get(s[i] == undefined)){
//             map.set(s[i],1)
//         }
//         else{
//             map.set(s[i],map.get(s[i])+1)
//         }
       
//     }
//     return map
    
//   }

//   console.log(findLongestSubstring('rithmschool'))


//================= write a code to reverse a number======================//

// function reverseSentence(sentence) {
//     // base case
//     if (sentence.length === 0) {
//       return sentence;
//     }
//     // recursive case
//     const lastChar = sentence.slice(-1);
//     const restOfSentence = sentence.slice(0, -1);
//     return lastChar + reverseSentence(restOfSentence);
//   }
//   // example usage
//   const sentence = "This is a sentence.";
// console.log(reverseSentence('amit'))



// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     var cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
//     // Check if the string is the same forwards and backwards
//     for (var i = 0; i < cleaned.length / 2; i++) {
//       if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
//         return false;
//       }
//     }
//     return true;
//   }
  

// const myPromise = new Promise((resolve, reject) => {
//         // Some asynchronous operation
//         const randomNumber = Math.floor(Math.random() * 10);
//         if (randomNumber % 2 === 0) {
//           resolve(randomNumber);
//         } else {
//           reject('Sorry, the number is odd.');
//         }
//       });
      
//       myPromise
//         .then((result) => {
//           console.log(`The number is even: ${result}`);
//         })
//         .catch((error) => {
//           console.error(error);
//         });

for (let i = 0; i <2; i++) {
  setTimeout(function() { console.log(i) }, 100);
}

let a =[2,4,-4,10,9]   


