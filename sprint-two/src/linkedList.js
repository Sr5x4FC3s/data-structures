//essentially we need to "direct traffic" to ensure that proper vals are pointed tio 

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.next = null;

  list.addToTail = function(value) {
    //since it's the first node being passed, head will also reference the same val as tail 
    //except with head referencing the passed val in node and tail as a reference to head
    // if (!this.head) { // this will check to see if list.head is null and if it is then set it to the first node val
    //   this.head = Node(value);
    // }
    // this.tail = Node(value);
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
    }
    if (list.head) {
      list.next = newNode;
    }
    list.tail = newNode;
  };
  list.removeHead = function() {
    //remove the first object of the list which is like the the func queue 
    //what does head do? reference the value of the first node...
    // var temp = this.head;
    // delete this.head;
    // this.head = 'something';
    // return temp;

    //we don't need to delete the obj but instead just save the previous head to a var and return it wehile
    //while setting the head to the next reference address for the new val
    // var temp = this.head.value;
    // delete this.head.value;
    // this.head = this.head.next;
    // return temp;

    var temp = list.head['value'];
    //console.log(temp, list.head.value);
    delete list.head;
    list.head = list.next;
    return temp;
  };

  list.contains = function(target) {
    //checks to see if a value exists
    // var valueList = Object.values(list);
    // console.log(valueList);
    // var found = valueList.filter(x => x !== target);
    // if (found) {
    //   return true;
    // }
    //we need to implement a while loop to iterate and return boolen val
    var contained = list.head.value;
    if (list.head.value === target) {
  
    } else {
      contained = list.next.value;
    }
    while(contained) {
      if (contained === target) {
        return true;
      } else {
         //contained = list.next;
         return false;
      }
      //contained = list.next;
      //return false;
    }
  };
  return list;
};

//note: this is the func that will assign vals to nodes 
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
