// ========================================Bubble Sort =====================  //
/**
 * TC= O(n*n)
 */
// let bubble = function (arr) {
//   let swap = false;
//   for (i = 0; i < arr.length; i++) {
//     // we will make 1st,2nd,3rd ............nth pass using the loop
//     for (j = 0; j < arr.length - 1; j++) {
//       // we will compare 1st element,2nd element----------------n-1 element
//       if (arr[j] > arr[j + 1]) {
//         arr[j] = arr[j] + arr[j + 1];
//         arr[j + 1] = arr[j] - arr[j + 1];
//         arr[j] = arr[j] - arr[j + 1];
//         swap = true;
//       }
//     }
//     if (swap == false) break;
//   }
//   return arr;
// };
// console.log(bubble([233, 12, 6, 89, 15, 23]));

//=========================Sort the 1st half of an array in ascending and 2nd half in descending order respect========//
//var a = [5, 2, 4, 7, 9, 3, 1, 6, 8];     // output [1 2 3 4 9 8 7 6 5]

// let swapArray = function (arr) {
//   for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         arr[j] = arr[j] + arr[j + 1];
//         arr[j + 1] = arr[j] - arr[j + 1];
//         arr[j] = arr[j] - arr[j + 1];
//       }
//     }
//   }
//   //console.log(arr)
//   let start =0;
//   let end = arr.length-1
//   let mid= Math.max((start+end/2))
//   if(mid%2!==0){
//     while(mid<end){
//         arr[mid]=arr[mid] + arr[end]
//         arr[end]=arr[mid] - arr[end]
//         arr[mid]=arr[mid] - arr[end]
//         mid++
//         end--

//       }
//       return arr
//   }
//   else{
//     mid =mid+1
//     while(mid<end){
//         arr[mid]=arr[mid] + arr[end]
//         arr[end]=arr[mid] - arr[end]
//         arr[mid]=arr[mid] - arr[end]
//         mid++
//         end--

//       }
//       return arr
//   }

//   }
//                                 //  [1,2,3,4,5,6]   //  1 2 3 6 5 4

// console.log(swapArray([1,2,3,4,5,6,7,8]));

//==============================Merge two array in sorted form================================================//

// let arr1=[1,2,3,0,0,0]
// let arr2=[2,5,6]
// let n=arr1.length
// let m=arr2.length

// let arr3=[]
// let i=0
// let j=0

// while(arr3.length<(n+m)){
//     if(i==n){
//         arr3.push(arr2[j])
//         j++
//     }
//     else if(j==m){
//         arr3.push(arr1[i])
//         i++
//     }
//     else{
//         if(arr1[i]<arr2[j]){
//             arr3.push(arr1[i])
//             i++
//         }
//         else{
//             arr3.push(arr2[j])
//             j++
//         }
//     }

// }
// let d = arr3.filter((el)=>el!==0)

// console.log(d);

//============================Sort color======================================================================//

//var sortColors = function(nums) {
//Bubble Sort
// let swap = false
// for(i=0;i<nums.length;i++){
//     for(j=0;j<nums.length-1;j++){
//         if(nums[j]>nums[j+1]){
//             nums[j]=nums[j]+nums[j+1]
//             nums[j+1]=nums[j]-nums[j+1]
//             nums[j]=nums[j]-nums[j+1]
//             swap = true
//         }

//     }
//     if(swap==false) break
// }
// return nums

//====================Use Merge Sort method==========================================//

// var sortColors = function(nums,start,end) {
//     let mid = start + parseInt((end-start)/2)
//     if(start>=end){
//         return   //simple return
//     }
//     sortColors(nums,start,mid)
//     sortColors(nums,mid+1,end)
//     merge(nums,start,mid,end)

// };
// let nums = [-1,0,1,2,-1,-4]
// // let length= nums.length-1

// let d =sortColors([-1,0,1,2,-1,-4],0,nums.length-1)
// console.log(d)

// function merge(nums,start,mid,end){
//     let mergeArray=new Array()
//     let index1 = start
//     let index2 = mid+1
//     let mergeArrayIndex=0
//     while(index1<=mid && index2<=end){
//         if(nums[index1]<=nums[index2]){
//             mergeArray[mergeArrayIndex]=nums[index1]
//             mergeArrayIndex++
//             index1++
//         }
//         else{
//             mergeArray[mergeArrayIndex]=nums[index2]
//             mergeArrayIndex++
//             index2++

//         }
//     }
//     while(index1<=mid){
//         mergeArray[mergeArrayIndex]=nums[index1]
//             mergeArrayIndex++
//             index1++

//     }
//     while(index2<=end){
//         mergeArray[mergeArrayIndex]=nums[index2]
//             mergeArrayIndex++
//             index2++

//     }

//     let j = start
//     for(let i=0;i<mergeArray.length;i++){
//         nums[j]=mergeArray[i]
//         j++

//     }
// }

//====================Kth element ======================================//
// var findKthLargest = function(nums, k) {
//     let swap = false
//     for(i=0;i<nums.length;i++){
//         for(j=0;j<nums.length-1;j++){
//             if(nums[j]<nums[j+1]){
//                 nums[j]=nums[j] + nums[j+1]
//                 nums[j+1]=nums[j] - nums[j+1]
//                 nums[j]=nums[j] - nums[j+1]
//                 swap = true

//             }
//         }
//         if(swap == false) return false
//     }
//     console.log(nums)
//     return nums[k-1]

// };

// console.log(findKthLargest([3,2,1,5,6,4],2))

//============================merge two sorted Array==============================================//
// let arr1 = [1, 6, 9];
// let arr2 = [2, 4, 8, 10, 15];
// let n = arr1.length;
// let m = arr2.length;

// let arr3 = [];
// let i = 0;
// let j = 0;

// while (arr3.length < n + m) {      //at starting i=2 nd j= 4
//   if (i == n) {
//     arr3.push(arr2[j]);
//     j++;
//   } else if (j == m) {
//     arr3.push(arr1[i]);
//     i++;
//   } else {           
//     if (arr1[i] < arr2[j]) {
//       arr3.push(arr1[i]);
//       i++;
//     } else {
//       arr3.push(arr2[j]);                            // [1,2,]
//       j++;
//     }
//   }
// }

// console.log(arr3);

//==================Median of to array =======================================//
var findMedianSortedArrays = function(nums1, nums2) {
    let n = nums1.length
    let m = nums2.length
    let i =0
    let j =0
    let arr =[]
    while (arr.length<n+m){
        if(i==n){
            arr.push(nums2[j])
            j++
        }
        else if (j==m){
            arr.push(nums1[i])
            i++
        }
        else{
            if(nums1[i]<nums2[j]){
                arr.push(nums1[i])
                i++

            }
            else{
                arr.push(nums2[j])
                j++
            }
        }
    }
    // arr = [1,2,3]
    let x = arr.length
    let mid = Math.floor(x/2)
    if(x%2!=0){
        return arr[mid]
    }
    else{
        return (arr[mid-1] + arr[mid])/2
    }  
};
let nums1 = [1,2]                 //1,2,3,4
let nums2=[3,4]
console.log(findMedianSortedArrays(nums1,nums2))
