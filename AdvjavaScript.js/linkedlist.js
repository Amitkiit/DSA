//how to create linked list
// class Node{
//     constructor(val){
//         this.value = val
//         this.next = null
//     }
// }

// var node = new Node(12)
//  node.next = new Node(15)
// let dileep = node.next
//  dileep.next = new Node(20)
// console.log(node);

// how to add node in between
// class Node{
//     constructor(val){
//         this.value = val
//         this.next = null
//     }
// }
// var node = new Node(12)             // adding a value between 15 and 20
// node.next = new Node(15)

// let strval = node.next
// strval.next = new Node(20)

// let new_node = new Node(18)
// new_node.next = strval.next
// strval.next = new_node

// console.log(node);
//console.log(new_node);

// class Node{
//     constructor(val){
//         this.value = val
//         this.next = null
//     }
// }
// // adding a value between 12 and 20
// var node = new Node(12)

//  node.next = new Node(20)
//  let newV = new Node(13)
//  newV.next = node.next
//  node.next = newV

// console.log(node);

// class Node{
//     constructor(val){
//         this.value = val
//         this.next = null
//     }
// }

// let arr = [2, 5, 8, 3, 4];                         // convert in linkedlist

// let new_Node = new Node(arr[0]);
// let pointer = new_Node;
// for (let i = 1; i < arr.length; i++) {
//   let temp = new Node(arr[i]);
//   pointer.next = temp;
//   pointer = pointer.next;
// }
// console.log(new_Node);

// let prev = null;
// let curr = new_Node
// while(curr){
//     let next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr=next;
// }
// console.log(new_Node)

// var node = new Node(12)
// node.next = new Node(15)

// let amit = new Node(10)

// amit.next = node
// console.log(node)

//=========================Reverse Linked List 206===============================//
// var reverseList = function(head) {
//     if(head == null || head.next === null){
//         return head
//     }
//     let rev = reverseList(head.next)
//     head.next.next = head
//     head.next = null
//     return rev
// };

//========================141. Linked List Cycle ============================//
// var hasCycle = function(head) {
//     let slow = head
//     let fast = head
//     while(fast!=null && fast.next!=null){
//         slow = slow.next
//         fast = fast.next.next
//         if(slow === fast){
//             return true
//         }
//     }
//     return false    
// };

