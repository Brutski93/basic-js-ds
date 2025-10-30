const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let currentList = l;
  let parentList = null;
  while (currentList) {
    if (currentList.value === k) {
      if (currentList.next) {
        currentList.value = currentList.next.value;
        currentList.next = currentList.next.next;
      } else {
        parentList.next = null;
        return;
      }
    } else {
      parentList = currentList;
      currentList = currentList.next;
    }
  }
  return l;
}

module.exports = {
  removeKFromList
};

const arr = [1, 2, 3];
const list = convertArrayToList(arr);

function convertArrayToList(arr, index = 0) {
  if (index === arr.length) return null;
  const list = new ListNode(arr[index]);
  list.next = convertArrayToList(arr, index + 1);
  return list;
}

function convertListToArray(list) {
  if (!list.value) return [];
  const arr = [list.value];
  let curreentList = list;
  while (curreentList.next) {
    arr.push(curreentList.next.value);
    curreentList = curreentList.next;
  }
  return arr;
}

function consoleList(obj) {
  let currentObj = obj;
  while (currentObj) {
    console.log(`value: ${currentObj.value} next: ${currentObj.next}`);
    currentObj = currentObj.next;
  }
}

consoleList(list);
console.log(convertListToArray(list))
removeKFromList(list, 3);
consoleList(list);
console.log(convertListToArray(list))
