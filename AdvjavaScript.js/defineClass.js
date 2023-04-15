//===================================create a class ======//
// class student{
//     constructor(firstName,lastName){
//         this.firstName=firstName
//         this.lastName = lastName
//         this.tardies = 
//         this.score =[]
//     }
//     //instance method
//     fullName(){                                  
//         return 'your full name is ${this.firstName} ${this.lastName}';
//     }
//     markLate(){
//         this.tardies += 1;
//         if(this.tardies >=3) return "You are Expelled!!"
//         return `${this.firstName} ${this.lastName} has been late ${this.tardies} time`
//     }
//     addScore(score){
//         this.score.push(score)
//         return this.score
//     }

// }

// let firstStudent = new student('atul','yadav')
// firstStudent.firstName = 'anjali'
// let a= firstStudent.addScore(87)
// console.log(a)

//====================push the element in Linkedlist====//

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class singlyLinkedList{
    constructor(){
        this.head= null;
        this.tail = null;
        this.length=0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head= newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;   
            this.tail=newNode;
        }
        this.length++;
        return this;
    }
    traverse(){
        let current = this.head
        while(current){
            console.log(current.val)
            current= current.next
        }
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head
        var newTail = current;
        while(current.next){
            newTail = current;
            current =current.next;
        }
        this.tail=newTail
        this.tail.next = null
        this.length--
        if(this.length===0){
            this.head = null
            this.tail = null

        }
        return current


    }
}



var list = new singlyLinkedList()
list.push("hello")
list.push("Goodday")
list.push("fromAmitSide")
list.push("varanasi")
list.pop()
console.log(list)