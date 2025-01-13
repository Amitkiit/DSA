/* sallow copy obj ke ak level tak copy karte ha 
but deepcopy object ko nested level tak copy krta h 

B/c obj me jab ham copy krte h tho uska value copy nhi hota h uska 
reference memory(location) copy hota h 

sallow copy ke 2 way h 
1-Object.assign({},obj)
2-{...obj} */

/* let obj={
    name:"amit"
}
//let user=Object.assign({},obj)    //shallow copy
let user={...obj}
user.name="sumit"
console.log("Obj",obj)
console.log("user",user) */

//================DeepCopy===================//

/*  let obj={
    name:"amit",
    add:{
        post:"shivbpur"
    }
}

let user=JSON.parse(JSON.stringify(obj))  // but ye date and function ke sath kam nhi krte
   //tho uske ke lotus ak library h uske through krte ha
user.add.post="bbasjb"

console.log("Obj",obj)
console.log("user",user) */
