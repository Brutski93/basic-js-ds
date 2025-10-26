const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.start = null;
  }

  root() {
    return this.start;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.start) {
      this.start = newNode;
      return;
    }
    
    let currentNode = this.start;
    while (currentNode) {
      if (newNode.data === currentNode.data) return;
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  find(data) {
    let currentNode = this.start;
    while (currentNode) {
      if (currentNode.data === data) return currentNode;
      if (data < currentNode.data) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }
    return null;
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  remove(data) {
    if (!this.find(data)) return;
    if (this.start.data === data) {
      this.start = null;
      return;
    }

    function deleteNode2(obj, data) {
      if (obj.data > data) {
        if (obj.left.data === data) {
          obj.left = null;
          return;
        }
        deleteNode2(obj.left, data);
      }
      else {
        if (obj.right.data === data) {
          obj.right = null;
          return;
        }
        deleteNode2(obj.right, data);
      }
    }

    deleteNode2(this.start, data);
  }

  min(start = this.start) {
    if (!this.start) return null;
    let currentNode = start;
    let min = currentNode.data;
    while (currentNode.left) {
      min = currentNode.left.data;
      currentNode = currentNode.left;
    }
    return min;
  }

  max() {
    if (!this.start) return null;
    let currentNode = this.start;
    let max = currentNode.data;
    while (currentNode.right) {
      max = currentNode.right.data;
      currentNode = currentNode.right;
    }
    return max;
  }
  visual(obj = this.start) {
    if (!this.start) return;
    let left = null;
    let right = null;
    if (obj.left) left = obj.left.data;
    if (obj.right) right = obj.right.data;
    console.log(`Node: ${obj.data} left: ${left} right: ${right}`);
    if (obj.left) this.visual(obj.left);
    if (obj.right) this.visual(obj.right);
  }
}

module.exports = {
  BinarySearchTree
};

const tree = new BinarySearchTree();
      tree.add(9);
      tree.add(14);
      tree.add(2);
      tree.add(6);
      tree.add(128);
      tree.add(8);
      tree.add(31);
      tree.add(54);
      tree.add(1);
      tree.remove(14);
      tree.visual()
      tree.remove(8);
      tree.visual()
      tree.remove(9);
      tree.visual()
console.log(
  tree
);
