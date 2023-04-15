/* find first pair of element in this arry that return 0*/
//let x= [-5,10,-2,1,3,16,-6,2.1,4]
// function multiPointer(x) {
//   let y = x.sort((a, b) => a - b);
//   //console.log(y)

//   let i = 0;
//   let j = x.length - 1;
//   while (i < j) {
//    if(y[i]+y[j]==10) {
//     return [y[i],y[j]];
//    }
//    else if(y[i]+y[j]<10) {
//     i++
//    }
//    else{
//     j--
//    }
//   }
//   return 0;
// }

// const z= multiPointer([1,2,4,3,6])
// console.log(z)

//======================= sum closet to given value==============================================================//
/* */
// function useMultiPointer(arr,sum){
//  let i = 0
//  let j = arr.length-1
//  let diff = Infinity
//  var a,b
//  while(i<j){
//     let currenValue = Math.abs(arr[i]+arr[j] - sum)
//     if(currenValue<diff){
//         diff =currenValue
//         a = arr[i]
//         b= arr[j]
//     }
//     else if(arr[i]+arr[j]>sum){
//         j--
//     }
//     else{
//         i++
//     }
//  }
//  return [a,b]

// }

// let z= useMultiPointer([10,22,28,29,30,50],54)
// console.log(z)
//=============================Distance between two closest minimum=====================================//
/*Given an array of integers, find the minimum distance between any two occurrences of the minimum integer in the array.
Input:
 8
 5 1 2 3 4 1 2 1 
output:2
*/
/*step: seach all 1 Element location in Array
again using pointer method*/

// function minDistance(array){
//     let x = Math.min(...array)
//     let result=[]
//     for(let i=0;i<array.length;i++){
//         if(array[i]==x){
//             result.push(i)
//         }
//     }
//     console.log(result)
//     let i =0
//     let j = 1
//     let minValue = Infinity;
//     while(j<result.length){
//         let z=result[j]-result[i]
//         if(z<minValue){
//             minValue=z
//         }
//         i++
//         j++
//     }
//     return minValue

// }

// const z= minDistance([5, 1 ,2, 3, 4, 1, 2, 1])
// console.log(z)

//===================Max Pair Sum===============================//
// Given an array of distinct integers A, find the largest sum of any pair of elements.

// Input
//     6
//     1 2 3 89 4 10

// function maxSum(array){
//     let num = array.sort((a,b)=>a-b)
//     let length = num.length
//     return num[length-1] + num[length-2]

// }
// const z =  maxSum([1,2,3,89,4,10])
// console.log(z)

//================================Remove Duplicates from Sorted Array===================================================//

/**Input: nums = [1,1,2]  Output: 2, nums = [1,2,_] */

// const removeDuplicates = function (nums) {
//   let count={}
//   for(let i of nums){
//       count[i]=(count[i] || 0) + 1
//   }
//   console.log(count)
//   let b = Object.keys(count).map(Number)
//   return b

// }
// const z= removeDuplicates([1,1,2])
// console.log(z)

//===============================Two Sum II - Input Array Is Sorted=============================================//
/**Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2]. */

// function multiPointer(array1,N){
//   let array = array1.sort((a,b)=>a-b)
//   let i =0;
//   let j =array.length-1;

//   while(i<j){
//     if(array[i]+array[j]==N){
//       let b =[i,j].map((x)=>x+1)
//       return b;
//     }
//     else if(array[i]+array[j]>N){
//       j--
//     }
//     else{
//       i++
//     }
//   }
//   return 0;

// }
// const z= multiPointer([2,7,11,15],9)
// console.log(z)

//=======================================Rotate Array==========================================================================//
/**Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4] */

// function rotateNumber(array,k){
//   let i=array.length-1
//   let j=array.length-1-k

//   while(j<i){
//     array.unshift(array.pop)
//     i--
//   }
//   return array

// }
// const z= rotateNumber([1,2,3,4,5,6,7],3)
// console.log(z)

//============================Product of Array Except Self but not clear================================================//

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// function productExceptSelf(nums) {
//   const n = nums.length;
//   const output = new Array(n).fill(1);
//   //console.log(output)
//   let left = 1, right = 1;
//   // Calculate the product of all elements to the left of each element
//   for (let i = 0; i < n; i++) {                              //[1,2,-2,0,3,4]
//     output[i] *= left;
//     //console.log(output[i])
//     left *= nums[i];
//   }
//   //console.log(output)
//   // Calculate the product of all elements to the right of each element
//   for (let i = n - 1; i >= 0; i--) {
//    output[i] *= right;
//     right *= nums[i];
//   }
//   //console.log(output)
//   return output;
// }
// const z=  productExceptSelf([1,2,-2,0,3,4])
// let m=z.map((x)=>0+x)
// console.log(m)


//==============================Container With Most Water   need to explore=======================================================//

//let a =[2,1,1,2,0,1,0,2,1]






//console.log(reverse([1,2,3,4,5,6]))
