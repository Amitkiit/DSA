//Maximum Number of Vowels in a Substring of Given Length//
// function check(chr) {
//   if (chr == "a" || chr == "e" || chr == "i" || chr == "o" || chr == "u") {
//     return true;
//   }
//   return false;
// }
// var maxVowels = function (s, k) {
//   let c = 0;
//   let maxCount = 0;
//   for (let i = 0; i < k; i++) {
//     if (check(s[i])) {
//       c++;
//     }
//   }
//   maxCount = Math.max(maxCount, c);
//   for (i = k; i < s.length; i++) {
//     if (check(s[i - k])) {
//       c--;
//     }
//     if (check(s[i])) {
//       c++;
//     }
//     maxCount = Math.max(maxCount, c);
//   }
//   return maxCount;
// };

// const z = maxVowels("abciiidef", 3);
// console.log(z);

//=============================Longest Substring Without Repeating Characters using the set method ===============================================//
/**Input: s = "abcabcbb"
Output: 3 */
/*new Set()  = new Set(): Set is a collection of unique values where each value can be of any type.
                 It allows you to store and retrieve unique values. It doesn't allow duplicate values.
//example-
let mySet = new Set()
mySet.add("amit")
mySet.add("sumit")
console.log(mySet.has("amit"))   //output is true
*/

// var withoutRepeating= function(arr){
//     let start =0
//     let end =0
//     let max =0
//     let setArray = new Set()
//     while(end<arr.length){
//         if(!setArray.has[arr[end]]){
//             setArray.add(arr[end])
//             end++
//             max = Math.max(max,setArray.size)
//         }
//         else{
//             setArray.delete(arr[start])
//             start++
//         }

//     }
//     return max
// }
// const arr= withoutRepeating("abcabcbb")
// console.log(arr)

//=====================using map method to solve above problem ==============================================================//
/**new Map(): Map is a collection of key-value pairs where each key can be of any type. It allows you to store and retrieve values based on a specific key. 
 * Map allows you to use objects as keys, whereas with objects themselves, you can only use strings as keys. Some key differences between Map and Object include:

 *const myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

console.log(myMap.get("key2")); // Output: "value2"
 */

// var withoutRepeating = function(arr){
//         let mapArray = new Map()
//         let i=0;
//         let max=0;
//         for(let j=0;j<arr.length;j++){
//             let char = arr.charAt(j)
//             mapArray.set(char ,(mapArray.get(char) || 0)+1)
//             while(mapArray.get(char )>1){
//                 let leftDelete= arr.charAt(i)
//                 mapArray.set(leftDelete,(mapArray.get(leftDelete))-1)
//                 i++
//             }
//             max = Math.max(max,j-i+1)
//         }
//         return max;
//     }
//     const arr= withoutRepeating("abcabcbb")
//     console.log(arr)

//================================================= Max Consecutive Ones III=========================================================//
/*Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
 *Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2 */

// function containArray(array,k){
//     let mapArray = new Map()
//     let maxLength=0;
//     let left =0
//     for(let rigth = 0; rigth<array.length; rigth++){
//         let num = array[rigth]
//         mapArray.set(num,(mapArray.get(num)||0)+1)
//         // console.log(mapArray)
//         // console.log("Above")
//         while(mapArray.get(0)>k ){
//             mapArray.set(array[left],mapArray.get(array[left])-1)
//             console.log(mapArray)
//             //console.log("below")
//             left++
//         }
//         maxLength = Math.max(maxLength,rigth-left+1)

//     }
//     return maxLength

// }
// const array = containArray([1,1,1,0,0,0,1,1,1,1,0],2)
// console.log(array)

//==========================================Fruit Into Baskets leetCode 904================================================================//
// var totalFruit = function (fruits) {
//   let mapArray = new Map();
//   let left = 0;
//   let maxLength = 0;
//   let count = 0;
//   for (let right = 0; right < fruits.length; right++) {
//     let num = fruits[right];
//     mapArray.set(num, (mapArray.get(num) || 0) + 1);

//     if (mapArray.get(num) == 1) {
//       count++;
//     }
//     while (count > 2) {
//       let num1 = fruits[left];
//       mapArray.set(num1, mapArray.get(num1) - 1);
//       if (mapArray.get(num1) == 0) {
//         count--;
//       }
//       left++;
//     }
//     maxLength = Math.max(maxLength, right - left + 1);
//   }
//   return maxLength;
// };

// const array = totalFruit([0, 1, 2, 2], 2);
// console.log(array);

//==============================Longest Substring Of All Vowels in Order==========================================================================//
/** Input:
Input: word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"
Output: 13
Explanation: The longest beautiful substring in word is "aaaaeiiiiouuu" of length 13.
*/
// var longestBeautifulSubstring = function (word) {
//     let vol = ["a", "e", "i", "o", "u"]
//     let i = 0;
//     let max = 0;
//     let map = new Map();
//     //map.set(word[0],1)
//     for (let j = 1; j < word.length; j++) {
//         let char = word[j]
//         map.set(char, ((map.get(char)) || 0) + 1)

//         if (vol.indexOf(char) < vol.indexOf(word[j -1]) ) {
//             while (i < j) {
//                 if (map.get(word[i]) == 1) { map.delete(word[i]) }
//                 else { map.set(word[i], (map.get(word[i])) - 1) }
//                 i++
//             }
//         }

//         if (map.size===5) {
//             max = (max > j - i + 1) ? max : j - i + 1
//         }
//     }
//     return max
// };

//   const s = "aeiaaioaaaaeiiiiouuuooaauuaeiu";
//   console.log(longestBeautifulSubstring(s)); // output: 10

// function fibo(n){
//     if(n<=2) return 1
//     return fibo(n-1) + fibo(n-2)
// }

// console.log(fibo(12))

//====================================1876 leetcode==============================================//
/**Substrings of Size Three with Distinct Characters 
 * Input: s = "xyzzaz"
    Output: 1
*/

// function countGoodSubstrings(s) {
//   let count = 0;
//   for (let i = 0; i < s.length - 2; i++) {
//     const window = s.slice(i, i + 3);
//     if (isGood(window)) {
//       count++;
//     }
//   }
//   return count;
// }

// function isGood(s) {
//   const seen = new Set();
//   for (const char of s) {
//     if (seen.has(char)) {
//       return false;
//     }
//     seen.add(char);
//   }
//   return true;
// }

// const z = countGoodSubstrings("aababcabc");
// console.log(z);

//========================== Longest Palindromic Substring======================//
function palindrom(str){
    let n = str.length
    for(let i =0; i<n/2;i++){
        if(str[i]==str[n-1])
        return true
        else return false
    }
}

var longestPalindrome = function(s) {
    let str =[]
    for(i=0;i<s.length;i++){
        str.push(s[i])
        if(palindrom(str)){
            return str.join('')
        }
    }
    
};

console.log(longestPalindrome("babad"))