//utility function extend object with properties
function extend (obj, obj2) {
  for (var key in obj2) {
  	obj[key] = obj2[key];
  }
};

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  extend(newTree, treeMethods);
  newTree.children = [];  // fix me: change newTree.children = null to []
  console.log("children: ", newTree.children, "value: ", newTree.value);
  return newTree;
};
//we have two funcs being stored in treeMethods
var treeMethods = {};

treeMethods.addChild = function(value) {
  //add a subtree count
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  //traverses tree and see if something exists and returns a boolean 
  // if (this.children.length > 0) {
  // 	return true;
  // }
  // var contains = false;// base value assuming that something doesn't exist the array we're traversing
  
  // return contains;
  var contains = false;// base value assuming that something doesn't exist the array we're traversing
  var traverse = function(currentNode) {
    if (currentNode.value === target) {
    	console.log("currentNode: ", currentNode.value);
  	  contains = true;
    } else {
      for (var i = 0; i < currentNode.children.length; i++) {
      	if (currentNode.children) { // don't need this because in order to get to this stage, i needs to have a length > 0
      		console.log("iteration: ", currentNode.children[i]);
      	  traverse(currentNode.children[i]);
      	}
      }
    }
  }
  traverse(this);
  return contains;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
