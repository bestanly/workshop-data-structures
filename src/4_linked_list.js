/**********************************************************************************************************************************************
 * @module  LinkedList
 * @author  david-dest01
 * @date    03/23/19
 * @description Begin Linked List challenge below. 
 *              Details: For more information on LinkedList, please review section ____ within the README
 *              Testing Your Code: 
 *                - To test code, run npm test in terminal and complete everything under LinkedList data structure
 *                - For extensions, remove 'x' before describe on line ____ in testing file then save.
 **********************************************************************************************************************************************/

function LinkedList () {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

function Node (value) {
  this.value = value;
  this.next = null;
}

/* CHALLENGE 1
  * method: push
  * description: 
    - adds a new node to the end of the linked list
    - updates size
  * example
    - before: A -> B -> C -> null
    input: D
    - after: A -> B -> C -> D -> null
*/
LinkedList.prototype.push = function (value) {
  // insert code here
};

/* CHALLENGE 2
  * method: addToHead
  * description: 
    - adds a new node to the head of the linked list
    - updates size
  * example
    - before: B -> C -> D -> null
    input: A
    - after: A -> B -> C -> D -> null
*/
LinkedList.prototype.addToHead = function(value) {
  // insert code here
};

/* CHALLENGE 3
  * method: indexOf
  * description: 
    - returns the index of the node in the list 
    - if it doesn't exist in the list it returns -1
  * example
    - linked list: A -> B -> C -> null
    input: C
    output: 2
*/
LinkedList.prototype.indexOf = function (value) {
  // insert code here
};

/* CHALLENGE 4
  * method: remove
  * description: 
    - removes a node from the linked list. returns removed value
    - updates size
  * example
    - before: A -> B -> C -> null
    input: B
    - after: A -> C -> null
*/
LinkedList.prototype.remove = function (value) {
  // insert code here
};

/* CHALLENGE 5
  * method: removeHead
  * description: removes the head node of linked list, adjusts head pointer to subsequent node in linked list
  * example
    - before: A -> B -> C -> null
    removeHead()
    - after: B -> C -> null
*/
LinkedList.prototype.removeHead = function(value) {
  // insert code here
};

/* CHALLENGE 6
  * method: removeTail
  * description: removes tail node from linked list. adjusts tail pointer to point at preceding node
  * example
    - before: A -> B -> C -> null
    removeTail()
    - after: A -> B -> null
*/
LinkedList.prototype.removeTail = function(value) {
  // insert code here
};

/* CHALLENGE 7
  * method: getByIndex
  * description: retrives nove value based on provided index
  * example
    - linked list: A -> B -> C -> null
    input: 2
    output: C
*/ 
LinkedList.prototype.getByIndex = function (index) {
  // insert code here
};

/********************************************************************************************************************************/
/*                                             BONUS - EXTENSION METHODS                                                        */
/********************************************************************************************************************************/

/* CHALLENGE 8
  * method: removeByIndex
  * description: removes node at given index
  * example
    - before: A -> B -> C -> null
    input: 2
    - after:  A -> B -> null
*/ 
LinkedList.prototype.removeByIndex = function(index) {
  // insert code here
};

/* CHALLENGE 9
  * method: isEmpty 
  * description: returns true if the linked list does not contain any nodes, and false if the size is bigger than 0
  * example
    - linked list: A -> B -> C -> null
    isEmpty()
    - output: false
*/ 
LinkedList.prototype.isEmpty = function() {
  // insert code here
};

/* CHALLENGE 10
  * method: toString
  * description: returns a string representation of linked list
  * example
    - linked list: A -> B -> C -> null
    toString()
    - output: 'ABC'
*/ 
LinkedList.prototype.toString = function () {
  // insert code here
};

/* CHALLENGE 11
  * method: toArray
  * description: returns and array representation of linked list
  * example
    - linked list: A -> B -> C -> null
    toArray()
    - output: ['A', 'B', 'C']
*/ 
LinkedList.prototype.toArray = function () {
  // insert code here
};

/* CHALLENGE 12
  * method: getHead
  * description: retrieves the value from the first node of the list (head). returns null if no head;
  * example
    - linked list: A -> B -> C -> null
    getHead()
    - output: 'A'
*/ 
LinkedList.prototype.getHead = function () {
  // insert code here
};

/* CHALLENGE 13
  * method: getTail
  * description: retrieves last value from the last node in the list (tail) returns null if no tail;
  * example
    - linked list: A -> B -> C -> null
    getTail()
    - output: 'C'
*/ 
LinkedList.prototype.getTail = function () {
  // insert code here
};

/* CHALLENGE 14
  * method: totalNodes
  * description: totalNodes returns the total number of nodes in linked list 
  * example
    - linked list: A -> B -> C -> null
    totalNodes()
    - output: 3
*/ 
LinkedList.prototype.totalNodes = function () {
  // insert code here
};

/* please do not touch */ 
module.exports = {
  LinkedList,
  Node
}