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
    if (this.start.data === data) { // special case
      if (!this.start.left && !toDethis.startlete.right) {
        this.start = null;
        return;
      }
      if (this.start.left && !this.start.right) {
        this.start = this.start.left;
        return;
      }
      if (!this.start.left && this.start.right) {
        this.start = this.start.right;
        return;
      }
      let currentNode = this.start.right;
      let parentNode = this.start;
      let min = currentNode.data;
      while (currentNode.left) {
        min = currentNode.left.data;
        parentNode = currentNode;
        currentNode = currentNode.left;
      }
      this.start.data = min;
      if (min === this.start.right.data) {
        this.start.right = this.start.right.right;
        return;
      }
      if (currentNode.right) parentNode.left = currentNode.right;
      else parentNode.left = null;
      return;
    }

    function deleteNodeStep1(obj, data) {
      if (obj.data > data) {
        if (obj.left.data === data) {
          deleteNodeStep2(obj, obj.left);
          return;
        }
        deleteNodeStep1(obj.left, data);
      }
      else {
        if (obj.right.data === data) {
          deleteNodeStep2(obj, obj.right, false);
          return;
        }
        deleteNodeStep1(obj.right, data);
      }
    }
    function deleteNodeStep2(parent, toDelete, left = true) { // by default toDelete is left 
      if (!toDelete.left && !toDelete.right) {
        if (left) parent.left = null;
        else parent.right = null;
        return;
      }
      if (toDelete.left && !toDelete.right) {
        if (left) parent.left = toDelete.left;
        else parent.right = toDelete.left;
        return;
      }
      if (!toDelete.left && toDelete.right) {
        if (left) parent.left = toDelete.right;
        else parent.right = toDelete.right;
        return;
      }

      let currentNode = toDelete.right;
      let parentNode = toDelete;
      let min = currentNode.data;
      while (currentNode.left) {
        min = currentNode.left.data;
        parentNode = currentNode;
        currentNode = currentNode.left;
      }
      toDelete.data = min;
      if (min === toDelete.right.data) {
        toDelete.right = toDelete.right.right;
        return;
      }
      if (currentNode.right) parentNode.left = currentNode.right;
      else parentNode.left = null;
    }

    deleteNodeStep1(this.start, data);
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
    if (!this.start) {
      console.log(`Node: ${obj} left: no right: no`);
      return;
    }
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

// const tree = new BinarySearchTree();
//       tree.add(9);
//       tree.add(14);
//       tree.add(2);
//       tree.add(6);
//       tree.add(128);
//       tree.add(8);
//       tree.add(31);
//       tree.add(54);
//       tree.add(1);
//       tree.visual()
//       console.log('removing 14');
//       tree.remove(14);
//       tree.visual()
//       console.log('removing 8');
//       tree.remove(8);
//       tree.visual()
//       console.log('removing 9');
//       tree.remove(9);
//       tree.visual()
// console.log(
  // tree
// );
