const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
// class Queue {
//   getUnderlyingList() {
//     // Remove line below and write your code here
//     throw new NotImplementedError('Not implemented');
//   }

//   enqueue(/* value */) {
//     // Remove line below and write your code here
//     throw new NotImplementedError('Not implemented');
//   }

//   dequeue() {
//     // Remove line below and write your code here
//     throw new NotImplementedError('Not implemented');
//   }
// }
class Queue {
  constructor() {
    this.value = null;
    this.next = null;
  }
  enqueue(data, obj = this) {
    if (!obj.value) {
      obj.value = data;
      return;
    }
    // if (!obj.next) obj.next = new ListNode(data);
    if (!obj.next) obj.next = {value: data, next: null};
    else this.enqueue(data, obj.next);
  }
  dequeue() {
    if(!this.value) return undefined;
    const temp = this.value;
    this.value = this.next.value;
    this.next = this.next.next;
    return temp;
  }
  getUnderlyingList() {
    if(!this.value) return null;
    return {value: this.value, next: this.next};
  }
  test() {
    let curr = this;
    while (curr) {
      console.log(curr.value, curr.next);
      curr = curr.next
    }
  }
}
module.exports = {
  Queue
};
