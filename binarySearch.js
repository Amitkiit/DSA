/**Binary search has two type
 * Recursive and Itervative way
 *
 */

//=======================Iterative way========================================================================//
// const searchElem = function (arr) {
//   let find = 19;
//   let start = 0;
//   let end = arr.length - 1;
//   let position = undefined;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] === find) {
//       position = mid;
//       break;
//     } else if (arr[mid] < find) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return position;
// };
// console.log(searchElem([1, 5, 7, 8, 19, 20]));

//======================================Find peak element===============================================//
/**Take help of note */

// var findPeakElement = function (nums) {
//   let l = 0;
//   let r = nums.length - 1;
//   while (l < r) {
//     let mid = l + Math.floor((r - l) / 2);
//     if (nums[mid] > nums[mid + 1]) {
//       r = mid;
//     } else {
//       l = mid + 1;
//     }
//   }
//   return l;
// };
// console.log(findPeakElement([1,2,3,1]))

//================================Find First and Last Position of Element in Sorted Array==============================//
// var searchRange = function(nums, target) {
//     let start = 0;
//     let end = nums.length - 1;
//     // Find the first position of the target element
//     let firstPos = -1;
//     while (start <= end) {
//       let mid = Math.floor((start + end) / 2);
//       if (nums[mid] >= target) {
//         end = mid - 1;
//         if (nums[mid] === target) {
//           firstPos = mid;
//         }
//       } else {
//         start = mid + 1;
//       }
//     }

//     // Find the last position of the target element
//     let lastPos = -1;
//     start = 0;
//     end = nums.length - 1;
//     while (start <= end) {
//       let mid = Math.floor((start + end) / 2);
//       if (nums[mid] <= target) {
//         start = mid + 1;
//         if (nums[mid] === target) {
//           lastPos = mid;
//         }
//       } else {
//         end = mid - 1;
//       }
//     }az

//     return [firstPos, lastPos];
//   }
// console.log(searchRange([5,7,7,8,8,10],6))

//============================================================================================================//
let a = [3, 7, 11, 34, 78, 90, 92, 96, 98]; //find index of 34
/**Time complicty -
 * best O(1)
 * avg O(logn)
 * worst O(logn)
 */

// function searching(arr,start,end,k){
//     if(start<=end){                                 // second approch
//         let mid= Math.floor((start+end)/2);
//         if(arr[mid]==k) return mid
//         else if(arr[mid]<k) return searching(arr,mid+1,end,k)
//         else if(arr[mid]>k) return searching(arr,start,mid-1,k)    // upto here
//     }

// let start =0                             //first approch
// let end= arr.length-1
// let position =undefined
// while(start<=end){
//     let mid = Math.floor((start + end) / 2);
//     if(arr[mid]==k){
//         position=mid
//         break;
//     }
//     else if(arr[mid]<k){
//         start = mid+1
//     }
//     else{
//         end =mid-1
//     }
// }
// return position;                             //upto here
// }
// let arr=[3,7,11,34,78,90,92,96,98]
// console.log(searching(arr,0,arr.length-1,34))

//=========================================Search Insert Position========================================================//

// var searchInsert = function(nums, target) {
//     let start =0
//     let end = nums.length-1
//     let position=undefined
//     while(start<=end){
//         let mid= Math.floor((start+end)/2)
//         if(nums[mid]===target){
//             position = mid;
//             break;
//         }
//         else if(nums[mid]<target){

//             start =mid+1

//         }
//         else{
//             end = mid -1
//         }
//     }
//     return position;
// }

// console.log(searchInsert([1,3,5,6],5))

//=================================Top K Frequent Words======================================================//

var topKFrequent = function (arr, k) {
  const frequencyMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (frequencyMap[arr[i]] === undefined) {
      frequencyMap[arr[i]] = 1;
    } else {
      frequencyMap[arr[i]]++;
    }
  }
  let result=[]
  let b = Object.entries(frequencyMap).sort((a,b)=>b[1]-a[1])
  let c = b.map(([key,values])=>key)
  for(i=0;i<k;i++){
    result.push(c[i])

  }
  return result 
};

console.log(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 4));


