/*Swap two number using (a,b) without the third variable*/
// let swapArray=function(a,b){
//     a=a+b
//     b=a-b
//     a=a-b
//     return (a+"\n"+b)

// }
// console.log(swapArray(2,5))

//=========================================Swap string===================================//

// let swapString= function(str1,str2){
//     str1= str1 + str2
//     str2= str1.slice(0,str1.length-str2.length)    //amit
//     str1= str1.slice(-(str1.length-str2.length))     //kamlesh
//     return (str1+"\n"+ str2)

// }

// console.log(swapString("shyam","ganshyam"))



//========================Max sum of pair element in Array========================================================//

// let maxSum= function(arr){
//     let max= 0
//     let Smax=0
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             Smax=max
//             max=arr[i]
//         }
//         else if(arr[i]>Smax){
//             Smax=arr[i]
//         }
//     }
//     return max+Smax

// }

// console.log(maxSum([12,34,10,16,40]))


//=========================Most frequest element of Array=====================================================//


// const mostFrequesntElement=function(arr){
//     let map = new Map()
//     for(i=0;i<arr.length;i++){
//         if(map.get(arr[i])==undefined){
//             map.set(arr[i],1)
//         }
//         else{
//             map.set(arr[i],map.get(arr[i])+1)
//         }
        
//     }
//     let max=0
//     let element =0

//     for(x of map){
//         if(x[1]>max){
//             max=x[1]
//             element=x[0]
//             //return max
//         }

//     }
//     return  element  //(`${max} ${x[0]}`);

// }

// console.log(mostFrequesntElement([23,23,56,678,2,34,23,98,23,12,3,12,2,23,12]))

//================================== Roatate array k time ==============================================//

// var reverse= function(arr,i,j){
   
//     while(i<j){
//         arr[i]=arr[i]+arr[j]
//         arr[j]=arr[i]-arr[j]
//         arr[i]=arr[i]-arr[j]
//         i++;
//         j--
//     }
//     return arr

// } 
// let arr =[1,2,3,4,5,6,7]
// //console.log(reverse(arr))
// var rotate = function (nums, k) {                                      // first way
//     k=k%nums.length
//     nums=reverse(nums,0,nums.length-1)
//     nums=reverse(nums,0,k-1)
//     nums=reverse(nums,k,nums.length-1)

//     return nums 
// }
// let nums =[1,2,3,4,5,6,7]

// console.log(rotate(nums,3))

//=======================================Check if max occurring character of one string appears same number of times in other===//

/**hello world
    albcllsyaaaaaaaa */

    

    // const maxOccur= function(s1,s2){
    //     let x= s1.replace(/\s/g, '').split('')
    //     let map = new Map()
    //     for(let i =0;i<x.length;i++){
    //         if(map.get(x[i])==undefined){
    //             map.set(x[i],1)
    //         }
    //         else{
    //             map.set(x[i],map.get(x[i])+1)
    //         }
    //     }
    //     let value1=0
    //     let max1=0
    //     for(x of map){
    //         if(x[1]>max1){
    //             max1=x[1]
    //             value1=x[0]
    //         }
    //     }
    //     //console.log(map)

    //     let y=s2.split('')
    //     console.log(y)
    //     let map2= new Map()

    //     for(let i =0;i<y.length;i++){
    //         if(map2.get(y[i])==undefined){
    //             map2.set(y[i],1)
    //         }
    //         else{
    //             map2.set(y[i],map2.get(y[i])+1)
    //         }
    //     }
    //     //console.log(map2)
    //     // let value2=0
    //     // let max2=0
    //     for(y of map2){
    //         if(y[1]>max2){
    //             max2=y[1]
    //             value2=y[0]
    //         }
    //     }

    //    if(max1===max2 && value1===value2){
    //     return true
    //    }
    //    else{
    //     return false
    //    }

    // }

    // console.log(maxOccur("hello world","albcllsyaaaaa"))


//=================Find unique pair of element(inside in array) whose sum is equal to k==================//           

//Ans- (2,3) (4,1)

// function findPairs(arr, k) {
//     const pairs = [];
//     const map = new Map();
    
//     for (let i = 0; i < arr.length; i++) {
//       const complement = k - arr[i];
//       if (map.has(complement)) {
//         pairs.push([complement, arr[i]]);
//         map.delete(complement);
//         //console.log(map)
//     } else {
//         map.set(arr[i], true);
//       }
//     }
    
//     return pairs;
//   }
  
//   // Example usage:
//   const arr = [1, 2, 3, 4, 5, 6];
//   const k = 7;
//   const pairs = findPairs(arr, k);
//   console.log(pairs); // Output: [ [ 6, 1 ], [ 5, 2 ], [ 4, 3 ] ]

//==========================take an input and check whether the input is integer or not===============//
// function checkInteger(str){
//     let pattern =/^-?[0-9]+$/
//     let result= pattern.test(str)
//     return result

// }

// console.log(checkInteger("abcd"))


//======================Second most frequent============================================================//
// function secondMost(str){
//     let b= str.split('')
//     let map = new Map()
//     for(i=0;i<b.length;i++){
//         if(map.get(b[i]==undefined)){
//             map.set(b[i],1)

//         }
//         else{
//             map.set(b[i],map.get(b[i])+1)
//         }
//     }
//     console.log(map)
//     const sort = Array.from(map).sort((a,b)=>b[1]-a[1])
//     console.log(sort)
//     return sort[1][0]

// }
// console.log(secondMost("aaabbcccc"))





    






