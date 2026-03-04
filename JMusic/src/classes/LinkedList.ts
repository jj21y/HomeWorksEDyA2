import Node from "./Node";

class LinkedList{
    head: Node | null;
    tail: Node | null;
    length: number; 

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append (value: string){
        const newNode = new Node (value)
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    size(){
        return this.length;
    }
    peek(){
        return this.head;
    }
}
export default LinkedList;