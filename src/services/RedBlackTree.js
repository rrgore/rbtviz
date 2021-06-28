const BLACK = 0;
const RED = 1;

export class RedBlackTree {
    constructor() {
        this.root = null;
    }

    _insertNode(node) {
        console.log(`---- Method _insertNode ----`);

        if (node !== null && node instanceof Node) {
            if (this.root === null) {
                this.root = node;
            }
        }
    }

    insertVal(val) {
        console.log(`---- Method insertVal ----`);

        if (typeof val === "number") {
            let newNode = new Node(val);
            this._insertNode(newNode);
        }
    }

    searchVal(query) {
        console.log(`---- Method searchVal ----`);
        
        if (typeof query === "number") {
            let ansNode = this.root;
            while (ansNode != null) {
                if (ansNode.val === query)  return ansNode;
                else if (ansNode.val < query)   ansNode = ansNode.left;
                else    ansNode = ansNode.right;
            }
        }

        return null;
    }
}

export class Node {
    constructor(val=0, left=null, right=null, color=BLACK) {
        this.val = val;
        this.left = left;
        this.right = right;
        this.color = color;
    }
}