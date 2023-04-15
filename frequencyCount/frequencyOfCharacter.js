// Frequency of characters in a string
// Given a string S, count the frequency of characters in the string S i.e. which character is present how many times in the string
// Input:
//     hello world
//     where:
// First line represents the input string
// Output:

//     d 1
//     e 1
//     h 1
//     l 3
//     o 2
//     r 1
// function countFrequency(str) {
//     // create an empty object to store character counts
// let charCount = {};

// loop through each character in the string
//   for(let i = 0; i < str.length; i++) {
//     // if the character is not in the charCount object, add it with a count of 1
//     if(!charCount[str[i]]) {
//       charCount[str[i]] = 1;
//     }
//     // if the character is already in the charCount object, increment its count by 1
//     else {
//       charCount[str[i]]++;
//     }
//   }

//   // loop through the charCount object and print the character and its count
//   for(let char in charCount) {
//     console.log(char + " " + charCount[char]);
//   }
// }
//==================================================solution-1=======================================//
//  let a = "12553451"
//  let b =a.split('').map(Number)
//  console.log(b)
//  let obj={}
//  for(let i=0;i<b.length;i++){
//   if(obj[b[i]]){

//     obj[b[i]]+=1
//     //console.log(obj[b[i]])
//   }
//   else if(b[i]!==' '){
//     obj[b[i]]=1
//     //console.log(b[i])
//   }
//  }
//  console.log(obj)
//  console.log(Object.entries(obj))

//========================frequency count Solution 2  and time complexity is O(n^2)=================================================================//

// function frequencyCount(arr1,arr2){
//   for(i=0;i<arr1.length;i++){
//     let isSqare=false;
//     for(j=0;j<arr2.length;j++){
//       if(arr1[i]*arr1[i]===arr2[j]){
//         isSqare=true;
//       }
//       if(j===arr2.length -1){
//         if(!isSqare) {
//           return false;
//         }
//       }

//     }
//   }
//   return true;
// }

// const x = frequencyCount([1,2,3],[1,9,6])
// console.log(x)

//==================================================frequency count solution -3  O(n)===========================//

// function frequencyCount(array1,array2){
//   let mapArray1={}
//   let mapArray2={}
//   for(let i of array1){
//     mapArray1[i]=(mapArray1[i] || 0)+1
//   }
//   for(let j of array2){
//     mapArray2[j]=(mapArray2[j] || 0)+1
//   }
//   for(let k in mapArray1){
//     //console.log(k)
//     if(!mapArray2[k*k]) return false
//     if(mapArray1[k] !==mapArray2[k*k]) return false
//   }
//   return true

// }
// const x = frequencyCount([1,2,4,2],[1,4,4,16])
// console.log(x)

//===================================checking the Anagram with O(n)============================================================//
//  function anagram(str1,str2){
//   if(str1.length!=str2.length) return "this is not a anagram"
//   let counter={}
//   let counter2={}
//   for(let k of str1){
//     counter[k]= (counter[k] || 0) +1
//   }
//   // for(let l of str1){
//   //   counter2[l]= (counter2[l] || 0) +1
//   // }
//   // for(let m in counter){
//   //   if(!counter2[m]) return false;
//   //   if(counter[m] !==counter2[m]) return false
//   // }
//   // return true

//   for(let l of str2){
//     //console.log(l)
//     if(!counter[l]) {
//       return false;
//     }
//     counter[l]-=1;
//   }
//   return true;
//  }
//  const z=anagram("amit","mita")
//  console.log(z)

//==================================== Number count in Array=====================================//

//  function frequencyCount(arr1){
//   let obj={}
//   for(let k of arr1){
//     obj[k]=(obj[k] || 0) +1
//   }
//   console.log(obj)
//   return Object.entries(obj).map(([key, value]) => `${key} ${value}`).join('\n');
//  }

//  const z = frequencyCount([1,4,3,3,4])
//  console.log(z)

//===========================================Leetcode-1==========================================================================//
/*Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order*/
//  function topKFrequent(nums, k) {

//   let count={}                                              //take little bit google help
//   for(let i of nums){
//       count[i] = (count[i] || 0) +1
//   }
//   //console.log(Object.entries(count))
//   const m= Object.entries(count).sort((a, b) => b[1] - a[1]);
//   //console.log(m)
//   const result = [];
//   for (let i = 0; i < k; i++) {
//     result.push(parseInt(m[i][0]));
//   }
//   return result;
// };
// const z= topKFrequent([1,1,1,4,4,4,4,2,2,3],3)
// console.log(z)

//===========================================LeetCode-2=====================================================================//
/* Given a string s, sort it in decreasing order based on the frequency of the characters. 
The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.*/

// function frequencySort(s) {
//   // Count the frequency of each character
//   const charFreq = {};
//   for (const char of s) {
//     charFreq[char] = (charFreq[char] || 0) + 1;
//   }
//   // Sort the characters by frequency
//   const sortedChars = Object.keys(charFreq).sort((a, b) => charFreq[b] - charFreq[a]);
//   console.log(sortedChars)
//   // Concatenate the sorted characters into a new string
//   let sortedString = '';
//   for (const char of sortedChars) {
//     sortedString += char.repeat(charFreq[char]);
//   }
//   return sortedString;
// }
// const z= frequencySort("tree")
// console.log(z)

//======================================LeetCode-3==============================================//

// class Solution {

//   sort012(arr, N)
//   {
//       //your code here
//       let count={}
//       for(let i of arr){
//           count[i]=(count[i] || 0) + 1
//       }
//        let z = Object.keys(count).sort((a,b)=>b[1]-a[1])
//        //console.log(z)
//        let num =''
//        for(let j of z){
//            num +=j.repeat(count[j])
//        }
//        //console.log(num)
//        let m =num.split('').join(' ')
//        //return m;
//        const freq = [0, 0, 0]; // Initialize the frequency count for 0s, 1s, and 2s
// for (let i = 0; i < arr.length; i++) {
//   freq[arr[i]]++; // Increment the count for the corresponding element
// }
// //console.log(freq)
// let index = 0;
// for (let i = 0; i < freq.length; i++) {
//   for (let j = 0; j < freq[i]; j++) {
//     arr[index++] = i; // Overwrite the original array with the sorted values
//   }
// }
// return arr;
//   }
// }

//=======================================LeetCode-4=====================================================================//
/*Calculate the frequency of each word in the given string.*/
// let input="Success is not the key of Happiness Happiness is the key of Success"
// let input1= input.split(' ')
// let count={}
// for(let i of input1){
//   count[i] = (count[i] || 0) + 1
// }
// let z= Object.entries(count).map(([key,value])=>`${key}:-${value}`).join('\n');

// console.log(z)

//====================================================================================================================//
/*Find the element having different frequency than other array elements */
// let x=[1,1,1,2,2,3]
// let count={}
// for(let i of x){
//   count[i]=(count[i] || 0) + 1
// }
// let z = Object.keys(count).map(Number).length
// console.log(z)

//========================================================================================================================//
/*Frequency of characters in a string */
// let x= "hello world great"
// let y = x.split('')
// let count={}
// for(let i of y){
//   count[i]=(count[i] || 0) + 1
// }
// delete count[' '];
// Object.entries(count).sort().map(([key,value])=>`${key} ${value}`).join('\n')
// console.log(count)

//=======================Replace each element by difference of array size and frequency of that element==========//
// const arr = [1, 2, 5, 2, 2, 5, 4];
// const n = arr.length;

// const frequencyMap = {};
// for (let i = 0; i < n; i++) {
//   if (frequencyMap[arr[i]] === undefined) {
//     frequencyMap[arr[i]] = 1;
//   } else {
//     frequencyMap[arr[i]]++;
//   }
// }
// console.log(Object.entries(frequencyMap))    //{ '1': 1, '2': 3, '4': 1, '5': 2 }

// const result = arr.map((elem) => n - frequencyMap[elem]);

// console.log(result); // [6, 4, 5, 4, 4, 5, 6]


//========================Check if both halves of the string have same set of characters======================//

/**input  abcbac   yes */

// function sameString(str){
//   let str2 = str.split('')
//   let freq1={}
//   let freq2={}
//   let a = Math.floor(str2.length/2)
//   for(i=0;i<a;i++){
//     let x =str[i]
//     if(freq1[x]==undefined){
//       freq1[x]=1
//     }
//     else{
//       freq1[x]++
//     }
//   }
//   console.log(freq1)
//   for(i=a;i<str2.length;i++){
//     let x =str[i]
//     if(freq2[x]==undefined){
//       freq2[x]=1
//     }
//     else{
//       freq2[x]++
//     }
//   }
//   console.log(freq2)

//   for(let k in freq1){
//     console.log(k)
//     if(!freq2[k]) return "No"
//     if(freq1[k]!==freq2[k]) return "No"
//   }
//   return "Yes"
// }

// console.log(sameString("abcdcdeba"))


//======================Sort Array by Increasing Frequency========================================//
var frequencySort = function(nums) {
  let map=new Map()
  for(i=0;i<nums.length;i++){
      if(map.get(nums[i])==undefined){
          map.set(nums[i],1)
      }
      else{
          map.set(nums[i],map.get(nums[i])+1)
      }
  }
  nums.sort((a,b)=>{
      let freqA= map.get(a)
      let freqB= map.get(b)
      if(freqA==freqB){
          return b-a
      }
      else{
          return freqA-freqB
      }
  })
  return nums
  
};

console.log(frequencySort([1,1,2,2,2,3]))     //3,1,1,2,2,2
