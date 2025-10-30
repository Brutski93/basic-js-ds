const { NotImplementedError } = require('../lib/errors');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
  }
  push(value) {
     this.stack.push(value);
  }
  pop() {
    if (this.stack.length < 1) return;
    const last = this.stack[this.stack.length - 1];
    this.stack.length--;
    return last;
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
}

module.exports = {
  Stack,
};
