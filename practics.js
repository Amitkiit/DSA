// function isAnagram(s, t) {       1st question
//   let x = s.split("");
//   let y = t.split("");
//   let obj1 = {};
//   let obj2 = {};
//   for (i = 0; i < x.length; i++) {
//     obj1[x[i]] = (obj1[x[i]] || 0) + 1;
//   }
//   for (i = 0; i < y.length; i++) {
//     obj2[y[i]] = (obj2[y[i]] || 0) + 1;
//   }
//   for(let x in obj1){
//     if(!obj2[x]) return false
//     if(obj1[x] !== obj2[x]) return false
//   }
//   return true
// }
// let s = "anagram";
// let t = "nagaraj";
// console.log(isAnagram(s, t));

// var topKFrequent = function(nums, k) {                          //2nd question
//   let obj ={}
//   for(i of nums){
//     obj[i] = (obj[i]|| 0) + 1
    
//   } 
//   let x = Object.entries(obj).sort((x,y)=>y[1]-x[1])
  
//   console.log(x)
  
//   let result=[]
//   for(i=0;i<k;i++){
//     result.push(x[i][0])

//   }
//   //return result.map(Number)
// };
// let nums = [1,1,1,2,2,3]
// let k = 2

// console.log(topKFrequent(nums, k));

// let string = str=>/^[0-9a-z]+$/gi.test(str)     // third question
// function reverseString(str){
//   let string =''
//   for(let i=str.length-1;i>=0;i--){
//     string+=str[i]
//   }
//   return string
// }
// let isPalindrome = function(s) {
//   let y =''
//   for(i=0;i<s.length;i++){
//     let x = s[i].toLowerCase()
//     if(string(x)){
//       y+=x
//     }
//   }
//   if(y=== reverseString(y)) return true
//   else return false
// };
// console.log(isPalindrome("A man, a plan, a camal: Panama"));


// str=>/^[0-9a-z]+$/gi


//Substrings of Size Three with Distinct Characters

var countGoodSubstrings = function(s) {
  let count = 0
  for(i=0;i<s.length-2;i++){
    let y = s.slice(i,i+3)
    if(isGood(y)){
      count++
    }
  }
  return count
}
function isGood(s){
  let x= new Set()
  for( chr of s){
    if(x.has(chr)) return false
    else{
      x.add(chr)
    }
  }
  return true
}


console.log(countGoodSubstrings("xyzzazb"))
