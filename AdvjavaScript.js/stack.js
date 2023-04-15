// promgram to implement stack data structure
// class stack{
//     constructor(){
//         this.item =[]
//         this.maxSize =4
//     }

//     //add element on the stack

//     add(element){
//         return this.item.push(element)
//     }
//     //remove element from the stack
//     remove(){
//         if(this.item.length>0){
//             return this.item.pop()
//         }
//     }

//     // view the last elemrnt of the stack
//     peek(){
//         return this.item[this.item.length-1];
//     }

//     //chekc if the stck is empty
//     isEmpty(){
//         return this.item.length==0
//     }

//     isFull(){
//         return this.item.length == this.maxSize
//     }
//     // the size of stack
//     size(){
//         return this.item.length;
//     }

//     //empty the stack
//     clear(){
//         return this.item = []
//     }

// }

// let stacks = new stack()
// stacks.add(2)
// stacks.add(5)
// stacks.add(10)
// stacks.add(9)
// stacks.remove()
// // console.log(stacks.remove())
// // console.log(stacks.isFull())
// //console.log(stacks.peek())
// //console.log(stacks.isEmpty())
// //console.log(stacks.size())
// //console.log(stacks.clear())
// console.log(stacks.item.length)

//=========================valid parantisies =================================================//
// var isValid = function(s) {
//     let n = s.length;
//     let stack =[]
//     for(i=0;i<n;i++){
//         if(s[i]=='('  || s[i]=='{' || s[i]=='['){
//             stack.push(s[i])
//         }
//         else{
//             if(s[i]==')' && stack[stack.length-1]=='(' || 
//                 s[i]=='}' && stack[stack.length-1]=='{' ||
//                 s[i]==']' && stack[stack.length-1]=='['
//             )
//             {
//                 stack.pop()
//             }
//             else{
//                 return false 
//             }
//         }
//     }
//     if(stack.length==0) return true
//     else return false

    
// };

//===========================496 Next Greater Element I===========================================//
// var nextGreaterElement = function(nums1, nums2) {
//     let map = new Map()
//     let stack =[]
//     for(i=0;i<nums2.length;i++){
//         let n = stack.length
//         while(stack.length !=0 && nums2[i]>stack[n-1]){
//             map.set(stack.pop(),nums2[i])
//             n = stack.length
//         }
//         stack.push(nums2[i])
//     }
//     for(i=0;i<nums1.length;i++){
//         nums1[i] = map.get(nums1[i]) || -1
//     }
//     return nums1   
// };
//=================================== next generation-II  503 =================================//
// var nextGreaterElements = function(nums) {
//     let stack = [];
//     let n = nums.length;
//     let resultArr = new Array(n).fill(-1);
//     for(let i=0;i<n*2;i++){
//         let number = nums[i%n];
//         let stackLen = stack.length;
//         while( stackLen !== 0 && number > nums[stack[stackLen-1]]){
//             resultArr[stack.pop()] = number;
//             stackLen = stack.length;
//         }
//         if(i<n){
//             stack.push(i);
//         }
//     }
//     //TC: O(2n-1) ~ O(n)
//     //SC: O(n)+O(n) = O(n)
//     return resultArr;
//  }; 
 //================739. Daily Temperatures  =====================================//
 var dailyTemperatures = function(temp) {
    let n = temp.length
    let stack =[]
    let array =new Array(n).fill(0)
    for(i=0;i<n;i++){
        let stackL = stack.length
        while(stackL != 0 && temp[i]> temp[stack[stackL-1]]){
            let popIndex = stack.pop()
            array[popIndex] = i - popIndex
            stackL = stack.length

        }
        stack.push(i)

    }
    return array
    
};
 