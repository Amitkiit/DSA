/** 
 * it is based on node(it contain valuse nd next(addr of next node))
 *linked list class -
   
*/

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }
// }

// class Node{
//     constructor(element){
//         this.element = element;
//         this.next= null
//     }
// }

// 10-->16-->20
// let LinkedList ={
//     head:{
//         value:10,
//         next:{
//             value:16,
//             next:{
//                 value:20,
//                 next:null
//             }
//         }
//     }
// }

// class LinkedList{                           //create a liked list
//     constructor(data){
//         this.head={
//             value:data,
//             next:{
//                 value:16,
//                 next:null,
//             }
//         }
//         this.tail=this.head
//         this.length=1;

//     }
//     append(data){
//         const newNode= {
//             value:data,
//             next:null
//         }
//         this.tail.next=newNode;
//         this.tail= newNode;
//     }
// }

// const myList= new LinkedList(10)
// //myList.append(16)
// console.log(myList)

//==========================REmove smae value from the list=======================================//
var deleteDuplicates = function(head) {
    let cur = head;
    while(cur && cur.next){
        if(cur.val == cur.next.val){
            cur.next = cur.next.next
        }
        else{
            cur = cur.next
        }
    }
    return head;
};

