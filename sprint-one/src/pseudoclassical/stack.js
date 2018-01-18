var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.\
  this.Stack = [];
};

Stack.prototype.push = function(value) {
  this.Stack.push(value);
};

Stack.prototype.pop = function() {
  return this.Stack.pop();
};

Stack.prototype.size = function() {
  return this.Stack.length;
};


