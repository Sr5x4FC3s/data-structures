var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {}
  obj.queue = [];
  
  extend(obj, queueMethods);
  return obj;
};

function extend (obj, obj2) {
  for (var key in obj2) {
  	obj[key] = obj2[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.queue.push(value);
};

queueMethods.dequeue = function() {
  return this.queue.shift();
};

queueMethods.size = function() {
  return this.queue.length;
};
