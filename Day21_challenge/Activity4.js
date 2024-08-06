
// Task 4 Merge Two sorted Linked lists
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(-1);
        let temp = dummy;
        let t1 = list1;
        let t2 = list2;

        while (t1 !== null && t2 !== null) {
            if (t1.val <= t2.val) {
                temp.next = t1;
                temp = t1;
                t1 = t1.next;
            } else {
                temp.next = t2;
                temp = t2;
                t2 = t2.next;
            }
        }

        if (t1 !== null) {
            temp.next = t1;
        } else {
            temp.next = t2;
        }

        return dummy.next;
    }
}


function printList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.val + " ");
        current = current.next;
    }
    
}


let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

let solution = new Solution();
let mergedList = solution.mergeTwoLists(list1, list2);

printList(mergedList);  
