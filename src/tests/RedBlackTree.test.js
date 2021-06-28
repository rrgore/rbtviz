import { RedBlackTree, Node } from '../services/RedBlackTree';

it ('Test for RedBlackTree root insertion', () => {
    const rbt = new RedBlackTree();
    rbt.insertVal(10);

    expect(rbt.root).not.toBeNull();
    expect(rbt.root.val).toEqual(10);
});

it ('Test for RedBlackTree search node', () => {
    const rbt = new RedBlackTree();
    rbt.insertVal(10);
    const node = rbt.searchVal(10);

    expect(node).not.toBeNull();
    expect(node.val).toEqual(10);
})