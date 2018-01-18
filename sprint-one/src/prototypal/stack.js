var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);  // will be a copy of Stack.stuff
  obj.stack = [];
  obj.count = 0;
  return obj;
};

var stackMethods = {};
// Stack.stuff = {};  //Stack.prototype 

stackMethods.push = function(value) {
  this.stack.push(value);
};

stackMethods.pop = function() {
  return this.stack.pop();
};

stackMethods.size = function() {
  return this.stack.length;
};

