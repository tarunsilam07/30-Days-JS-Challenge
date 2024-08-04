

// Task 1 Linked List
 class Node{
    constructor(value=null){
        this.value=value;
        this.next=null;
    }
 }

 const node1=new Node(7);
 const node2=new Node(3);
 node1.next=node2;
 console.log(node1.value);
 console.log(node1.next.value);


 //  Task 2

 class ListNode{
   constructor(value=null){
      this.value=value;
      this.next=null;
   }
 }
 
 class LinkedList{
   constructor(){
      this.head=null;
   }
   add(value){
      const newnode=new ListNode(value)
      if(!this.head){
         this.head=newnode;
      }
      else{
         let temp=this.head;
         while(temp.next){
            temp=temp.next;
         }
         temp.next=newnode
      }
   }
   remove(){
      if(!this.head)
         return null;
      if(!this.head.next){
         const value=this.head.value;
         this.head=null;
         return value;
      }
      let temp=this.head;
      while(temp.next.next){
         temp=temp.next;
      }
      const value=temp.next.value;
      temp.next.value=null;
      return value;
   }
   display(){
      let res='';
      let temp=this.head;
      while(temp){
         res+=temp.value+'->';
         temp=temp.next;
      }
      res+=null;
      console.log(res);
   }
 }
 const list=new LinkedList();
 list.add(7);
 list.add(3);
 list.add(2);
 list.add(5);
 list.display();

 list.remove();
 list.display();
 
 
 