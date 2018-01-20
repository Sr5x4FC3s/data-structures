var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // will be a list, therefore time complexity is linear (array)
  console.log(set._storage);
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  // this._storage.forEach(function(element) {
  // 	if (element === item) {
  // 	  return true;
  // 	} else {
  // 	  return false;
  // 	}
  // });
  var hasValue = false;
  for (var i = 0; i < this._storage.length; i++) {
  	if (this._storage[i] === item) {
  	  hasValue = true;
  	}
  }
  return hasValue;
};

setPrototype.remove = function(item) {
  console.log(item);
  var tobeRemoved = this._storage.indexOf(item);
  console.log(tobeRemoved);
  if (tobeRemoved !== -1) {
  	this._storage.splice(tobeRemoved, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
