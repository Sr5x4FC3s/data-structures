

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  console.log(this.storage);
  //this.size = 0;
  // this.storage = [];
  // this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //set key to the node and set value to a new obj literal
  this.storage[node] = {};
  //this.size ++;
  //add node to the array 
  // this.storage.push(node);
  // //assign node as a key and set value to a new obj literal
  // this.storage[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //check to see if storage has prop node => return boolean 
  if (this.storage.hasOwnProperty(node)) {
  	return true;
  } else {
  	return false;
  }
  //loop through the array and see if node exists
  // this.storage.forEach(function(element) {
  //   if (element === node) {
  //   	return true;
  //   }
  // });
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //we delete the key(node) in the storage 
  // if(this.storage[node]) {
  // 	for (var key in this.storage.node) {
  // 	  if (key === node) {
  // 	    delete this.storage.node[key];
  // 	  }
  // 	}
  // 	delete this.storage[node];
  // }
  for (var key in this.storage) {
  	if (this.storage[key][node]) {
      delete this.storage[key][node];
  	}
  }
  delete this.storage[node];
  // find a node in array and remove it (possibly use slice) - need to find the corresponding index
  // var foundIndex = this.storage.indexOf(node); // making assumption that nothing was found
  // if (foundIndex !== -1) {
  // 	this.storage.splice(foundIndex, 1); // removes that index from the array
  // }
  //delete references in memory to other nodes (edges)
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //return boolean to whether storage.from.tonode is true
  if (this.storage[fromNode][toNode] === true) {
  	return true;
  } else {
  	return false;
  }

  //addition: traverse thru this.storage and check whether or not this.storage.fromnode.tonode is true
  // for (var key in this.storage) {
  // 	if (this.storage[fromNode][toNode] === true) {
  //     return true;
  // 	} else {
  // 	  return false;
  // 	}
  // }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode][toNode] = true;
  this.storage[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode][toNode];
  delete this.storage[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //loop thru storage and see if node exists / true? callback
  for (var key in this.storage) { 
  	if (this.storage.hasOwnProperty(key)) { 
  	  cb(key);
  	}
  }
  //if it exists, call back (cb) and insert that edge as the arg 
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


