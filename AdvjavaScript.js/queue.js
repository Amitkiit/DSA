class queue{
    constructor(){
        this.item = []
        this.maxSize =5
    }
    // Add elemnt from the end of array
    enqueue(element){
        this.item.push(element)
    }

    //remove the element

    dequeue(){

        if(this.item.lengrh>0)
        {
            return this.item.shift()
        }
        
    }

    //view the front element
    peek(){
        return this.item[0];
    }

    // check the queue is empty
    isEmpty(){
        return this.item.length==0
    }

    // check if the queue is full
    isFull(){
        return this.item.length ==this.maxSize
    }

    //the size of queue
    size(){
        return this.item.length;
    }
    //emty the queue
    clear(){
        this.item =[]
    }


}

const queues = new queue()
queues.enqueue(14)
queues.enqueue(16)
queues.enqueue(18)
queues.enqueue(20)
queues.enqueue(22)
queues.enqueue(30)
console.log(queues.item)
console.log(queues.isFull())
console.log(queues.size())
queues.clear()
console.log(queues.size())
console.log(queues.isFull())
