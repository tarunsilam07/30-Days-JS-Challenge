

// Task 1 Add Two Numbers(Linked List)

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(-1);
        let temp1 = l1;
        let temp2 = l2;
        let curr = dummy;
        let carry = 0;
        
        while (temp1 !== null || temp2 !== null) {
            let sum = carry;
            if (temp1) sum += temp1.val;
            if (temp2) sum += temp2.val;
            
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
            
            carry = Math.floor(sum / 10);
            if (temp1) temp1 = temp1.next;
            if (temp2) temp2 = temp2.next;
        }
        
        if (carry) {
            curr.next = new ListNode(carry);
        }
        
        return dummy.next;
    }
}


function createLinkedList(arr) {
    let dummy = new ListNode();
    let curr = dummy;
    for (let num of arr) {
        curr.next = new ListNode(num);
        curr = curr.next;
    }
    return dummy.next;
}


function linkedListToArray(list) {
    let arr = [];
    while (list !== null) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}


let solution = new Solution();

let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let result = solution.addTwoNumbers(l1, l2);
console.log(linkedListToArray(result)); 

l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
result = solution.addTwoNumbers(l1, l2);
console.log(linkedListToArray(result)); 

l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
l2 = createLinkedList([9, 9, 9, 9]);
result = solution.addTwoNumbers(l1, l2);
console.log(linkedListToArray(result));
