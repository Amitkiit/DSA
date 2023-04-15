function solution(a){
let v=["a","e","i","o","u"]
let amit = 0;
for(let i=0; i<a.length; i++){
  let b=a[i].split("");
  let c=b.filter((x)=>!v.includes(x));
  if(c.length > (b.length -c.length))
  amit = amit +1
}
return a.length > 1 ? (amit*5)+((a.length-amit)*3): 0
}

let a = "susg"
console.log(solution(a))