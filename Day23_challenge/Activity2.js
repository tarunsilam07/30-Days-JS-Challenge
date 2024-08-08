

// Task 2 Merge K sorted Linked Lists

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    mergeKLists(lists) {
        const pq = [];

        
        for (let i = 0; i < lists.length; i++) {
            let temp = lists[i];
            while (temp) {
                pq.push(temp.val);
                temp = temp.next;
            }
        }

        
        pq.sort((a, b) => b - a); 

        const ans = new ListNode();
        let current = ans;

       
        while (pq.length > 0) {
            const newNode = new ListNode(pq.pop());
            current.next = newNode;
            current = newNode;
        }

        return ans.next;
    }
}


function arrayToList(arr) {
    const dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

const solution = new Solution();

const lists = [
    arrayToList([1, 4, 5]),
    arrayToList([1, 3, 4]),
    arrayToList([2, 6])
];

const mergedList = solution.mergeKLists(lists);


function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" -> "));
}


printList(mergedList);  
