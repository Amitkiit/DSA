// function maxSumOfElement(arr,p){
//     let max =0;
//     let sum =0;
//     let i =0;
//     while(i<p){
//         sum = sum + arr[i]
//         i++
//     }
//     max = sum;
//     i=p;
//     while(i <arr.length){
//         sum+= arr[i] -arr[i-p];
//         if(sum>max){
//             max =sum;
//         }
//         i++;
//     }
//     return max;
// }
// let arr = [8,14,3,4,19,81,17]
// let maxSum = maxSumOfElement(arr,4)
// console.log(maxSum)

//===========================2nd approach to solve above problem ====================================================================//

// function maxSumOfElement(arr, p) {
//   let currentSum = 0;
//   let maxSum = 0;
//   for (let i = 0; i < p; i++) {
//     currentSum += arr[i];
//   }
//   maxSum = currentSum;
//   for (let i = p; i < arr.length; i++) {
//     currentSum += arr[i] - arr[i - p];
//     maxSum = Math.max(currentSum, maxSum);
//   }
//   return maxSum;
// }
// let arr = [8, 14, 3, 4, 19, 81, 17];
// let maxSum = maxSumOfElement(arr, 4);
// console.log(maxSum);

//=============================Count number of substrings with exactly K distinct characters===============//
/**Input:
abc
2
where:
First line represents input String S.
Second line represents K.
Output: 2
Explanation:Possible substrings with 2 distinct characters are {"ab", "bc"} */

// function countSubstringsWithKDistinctCharacters(str, K) {
//   let count = 0;
//   let charCount = {};
//   let left = 0;
//   let right = 0;
//   while (right < str.length) {
//     // Increment the count of the character at the right pointer
//     charCount[str[right]] = (charCount[str[right]] || 0) + 1;
//     //console.log(charCount);

//     // If the number of distinct characters in the current window is greater than K,
//     // move the left pointer and decrement the count of the character at the left pointer
//     while (Object.keys(charCount).length > K) {
//       charCount[str[left]] -= 1;
//       if (charCount[str[left]] === 0) {
//         delete charCount[str[left]];
//       }
//       left += 1;
//     }
//     // If the number of distinct characters in the current window is exactly K,
//     // increment the count variable
//     if (Object.keys(charCount).length === K) {
//       count += 1;
//     }
//     // Move the right pointer
//     right += 1;
//   }

//   return count;
// }

// let str = "abc";
// let maxSum = countSubstringsWithKDistinctCharacters(str, 2);
// console.log(maxSum);

//==============================Longest Substring Without Repeating Characters============================================//
/**Given an integer array nums, find the subarray with the largest sum, and return its sum
 Input: nums = [-2,1,-3,4,-1,2,1,-5,4]   // Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.*/

// function subarray(array){
//     let left =0;
//     let right =0;
//     let sum=0
//     let maxSum =0;
//     //let newArray = new Map()
//     while(right<array.length){
//         sum+=array[right]                        // [-2,1,-3,4,-1,2,1,-5,4]
//         if(sum>maxSum){
//             maxSum =sum
//             right++
//         }
//         else{
//             left++
//         }

//     }
//     return sum
// }
// const z = subarray([-2,1,-3,4,-1,2,1,-5,4]);
// console.log(z);

//==================================Maximum Subarray===========================================================//
// const maxSub= function(arr){
//   let right=0
//   let left=0
//   let sum =0
//   while(right<arr.length){
//     let newSum=0
//     newSum+=arr[right]
//     if(newSum>sum){
//       right++


//     }
//     else{
//       left++
//     }

//   }
  
//   return newSum

// }

// console.log(maxSub([-2,1,-3,4,-1,2,1,-5,4]))