const { NotImplementedError } = require('../extensions/index.js');

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
  constructor () {
    this.array = [] ;
    this.size = 0;

  
  }


  push(element) {
    this.size++;
    this.array[this.size] = element;
  }

  pop() {
    let removed = this.array[this.size];
    delete this.array[this.size];
    this.size--
    return removed;
  }

  peek() {
    return this.array[this.size];
 
  }
}

module.exports = {
  Stack
};


const stack = new Stack ();

stack.push('apple');
console.log(stack);