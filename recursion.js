/**  ALLLL QUESTION RELATED TO THE RECURSION
 * Recursion:-
What is recursion ? How does it work?
How to solve a problem recursively?
How to analyze the time and space complexity of a recursive algorithm?
How can we apply recursion in a better way?
Practice questions on Recursion:-
https://leetcode.com/problems/fibonacci-number/
https://leetcode.com/problems/power-of-four
https://leetcode.com/problems/power-of-two
https://leetcode.com/problems/power-of-three
Regular Expression Matching    // https://leetcode.com/problems/regular-expression-matching
Count Good Numbers             // https://leetcode.com/problems/count-good-numbers
Valid Palindrome               // https://leetcode.com/problems/valid-palindrome/
 * 
 */
/** factorial of n number */
// const factorial= function(n){
//     {

//         if(n<=1) return 1;
//         return n*factorial(n-1)
//     }
// }
// const array = factorial(4);
// console.log(array);

// function fibo(n){
//     if(n<=2) return 1
//     return fibo(n-1) + fibo(n-2)
// }
// console.log(fibo(4))

// function multi(x){
//     if(x.length==0) return 1;
//     return x[0]*multi(x.slice(1))

// }

// const z= multi([3,5,2,8])
// console.log(z)

//===============================Power of Two===================================================//
/**  Input: n = 1
      Output: true
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
   An integer n is a power of two, if there exists an integer x such that n == 2x.
 */

// var isPowerOfTwo = function (n) {
//   if (n == 1 || n == 2) return true;
//   if (n % 2 != 0 || n == 0) return false;
//   return isPowerOfTwo(n / 2);
// };
// console.log(isPowerOfTwo(9));

//=======================Pow(x, n)=====================================================//
/**Implement pow(x, n), which calculates x raised to the power n (i.e., xn). */

// var myPow = function (x, n) {
//   if (n == 0) return 1;
//   if (n < 0) {
//     x = 1 / x;
//     n = -n;
//   }
//   if (n % 2 != 0) {
//     return x * myPow(x, n - 1);
//   }

//   let half = myPow(x, n / 2);
//   return half * half;
// };

// console.log(myPow(2, 4));

//====================================== Valid Palindrome=================================================//

//==============================Reverse Array=============================================================//
// var reverseString = function (s) {
//   recurssive(s, 0, s.length - 1);
//   return s;
// };
// var recurssive = function (s, start, end) {
//   if (start >= end) return;
//   let temp = s[start];
//   s[start] = s[end];
//   s[end] = temp;
//   return recurssive(s, start + 1, end - 1);
// };
// const z = reverseString(["h", "e", "l", "l", "o"]);
// console.log(z)

//2nd approch
// var reverseString = function(s) {
//     let left =0
//     let right=s.length-1
//     while(left<right){
//         let temp=s[left]
//         s[left]=s[right]
//         s[right]=temp
//         left++
//         right--
//     }

//     //   recurssive(s,0,s.length-1)
//     return s
// };
// console.log(reverseString([1,2,3,4,5]))

//===================================palindrom=======================================//
/**Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome */
//var isPalindrome = function(y) {

// let text = x.toString();
// for(var i=0;i<text.length/2;i++)
// {
//     if(text.charAt(i) != text.charAt(text.length-1-i))
//     {
//         return false;
//     }

// }
// return true;
// let y= x.split('').map(Number)
// console.log(y)

//   if(y.length==0 || y.length==1) return true
//   if(y[0]==y.slice(-1)) return isPalindrome(y.slice(1,-1))

// };

// console.log(isPalindrome(101))

//================================PALINDROM====================================//
// const isAlphNum = str=>/^[a-z0-9]+$/gi.test(str)
// function reverseString(str){
//     let string=''
//    for(i=str.length-1;i>=0;i--){
//         string+=str[i]
//     }
//     return string
//     }

// var isPalindrome = function(s) {
//     let y =''
//     for(i=0;i<s.length;i++){
//         let z= s[i].toLowerCase()
//         if(isAlphNum(z)){
//             y+=z
//         }
//     }
//     if(y==reverseString(y)) return true;
//     return false

// };

//============================Reverse a sentence using recursion======================================//
function reverseSentence(sentence) {
  // base case
  if (sentence.length === 0) {
    return sentence;
  }
  // recursive case
  const lastChar = sentence.slice(-1);
  const restOfSentence = sentence.slice(0, -1);
  return lastChar + reverseSentence(restOfSentence);
}
// example usage
const sentence = "This is a sentence.";
// const reversed = reverseSentence(sentence);
// console.log(reversed); // ".ecnetnes a si sihT"
//===================================== covert first latter captail================================//
// function converCaptail(arr) {
//   let result = [];
//   if (arr.length == 0) return [];

//   let s = arr[0][0].toUpperCase() + arr[0].slice(1);
//   result.push(s)
//   return result.concat(converCaptail(arr.slice(1)))
// }

// console.log(converCaptail(["abc", "dce", "fgh", "klm"]));

//===================reverse the word but only the word at same place ===============================//
function reverseWord(str){
  if(str.length<=1) return str;
  return reverseWord(str.slice(1)) +str[0]
}

function reverseSentence(alp){
  let word = alp.split(' ')
  for(let i=0;i<word.length;i++){
    word[i]=reverseWord(word[i])
  }
  return word.join(' ')
}
console.log(reverseSentence("my self amit yadav"))

//===================================== Find the Duplicate Number=====//
/**Input: nums = [1,3,4,2,2]
Output: 2 */

// var findDuplicate = function(nums) {

//   let map = new Map()
//   for(i=0;i<nums.length;i++){
//       if(map.get(nums[i])==undefined){
//           map.set(nums[i],1)
//       }
//       else{
//           map.set(nums[i],map.get(nums[i])+1)

//       }
//   }
//   let res=[]
//   for(let x of map){
//       if(x[1]>1) res.push(x[0])
//   }
//   return res

// };

//======================Find sum of array elements using recursion==================================//
// function sumArrayRecursive(arr) {
//   // Base case: empty array has a sum of 0
//   if (arr.length === 0) {
//     return 0;
//   }

//   // Recursive case: sum the first element and the rest of the array
//   return arr[0] + sumArrayRecursive(arr.slice(1));
// }

// console.log(sumArrayRecursive([1,2,5,8,19]))

//================================Find Majority Element========================================================//

// function majorityOfElement(arr){
//   let map =new Map()
//   for(i=0;i<arr.length;i++){
//     if(map.get(arr[i])==undefined) {
//       map.set(arr[i],1)
//     }
//     else{
//       map.set(arr[i],map.get(arr[i])+1)
//     }
//   }
//   for(x of map){
//     if(x[1]>arr.length/2) return x[0]
//   }

// }

// console.log(majorityOfElement([1,2,1,2,2]))

//==================================Find least occurring character==========================================//

// function leastOccur(str){
//   let x = str.split('').sort().join()
//   let map=new Map()
//   for(i=0;i<x.length;i++){
//     if(map.get(x[i])==undefined){
//       map.set(x[i],1)
//     }
//     else{
//       map.set(x[i],map.get(x[i])+1)

//     }
//   }
//   //return map
//   for(y of map){
//     if(y[1]==1){

//       return y[0];

//     }
//   }

// }
// console.log(leastOccur("hello"))

//========================================Rotate Array==========================================//

// var reverse= function(arr,i,j){
//   i=0;
//   j= arr.length-1
//   while(i<j){
//       arr[i]=arr[i]+arr[j]
//       arr[j]=arr[i]-arr[j]
//       arr[i]=arr[i]-arr[j]
//       i++;
//       j--
//   }
//   return arr

// }
// //var rotate = function (nums, k) {
// let arr=[1,2,3,4,5,6]
// let k=3
//   arr=reverse(arr,0,arr.length-1)
//   arr=reverse(arr,0,k-1)
//   arr=reverse(arr,k,arr.length-1)
// //return nums
//   console.log(reverse(arr,))

//arr = reverse(arr,0,arr.length-1)
