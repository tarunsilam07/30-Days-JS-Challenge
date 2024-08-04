
// Task 7
class Tree{
    constructor(value=null){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

const root=new Tree(7);
const leftchild=new Tree(3)
const rightchild=new Tree(5);
root.left=leftchild;
root.right=rightchild;
console.log(root);

//  Task 8

class TreeNode{
    constructor(value=null){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null; // The root of the binary tree
    }

    // Method to insert a value into the binary tree
    insert(value) {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    // Helper method to insert a node into the tree
    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    // Method to perform an in-order traversal
    inOrderTraversal() {
        this._inOrderTraversal(this.root);
    }

    // Helper method for in-order traversal
    _inOrderTraversal(node) {
        if (node !== null) {
            this._inOrderTraversal(node.left);
            console.log(node.value);
            this._inOrderTraversal(node.right);
        }
    }
}

// Example usage
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log("In-order Traversal:");
tree.inOrderTraversal();
// Output:
// In-order Traversal:
// 2
// 3
// 4
// 5
// 6
// 7
// 8

