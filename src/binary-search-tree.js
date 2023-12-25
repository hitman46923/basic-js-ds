const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/




class BinarySearchTree {
  constructor () {
    this.root = null;


  }




  root() {
    
 
  }

  add(data) {
    this.root = addInside(this.root, data);
    
    function addInside (Node , data) {
      if (!Node) {
        return new Node(data);
      }
      if (Node.data === data) {
        return Node;
      }
      if (data < Node.data)
      return Node;
    }
      if (data < node.value) {
        Node.left = addInside(Node.left, data); 
      }else {
        Node.right = addInside(Node.right, data);
      }
        return Node;
  }

  has(/*data/*) {
    return searchInside(this.root, data);
    function searchInside(Node, value){
      if(!Node){
        return false;
      }
      if (Node.data === value) {
        return true;
      }
      return data < Node.data ?
      searchInside(Node.left, data):
      searchInside(Node.right, data);
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};