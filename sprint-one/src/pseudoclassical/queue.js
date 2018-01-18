var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.Queue = [];
};

Queue.prototype.enqueue = function(value) {
  this.Queue.push(value);
};

Queue.prototype.dequeue = function() {
  return this.Queue.shift();
};

Queue.prototype.size = function() {
  return this.Queue.length;
};
