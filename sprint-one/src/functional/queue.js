//queue is thought of as "First in" is "first out"

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var objcount = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    count ++;
    objcount++;
    // storage[count] = value;
    storage[objcount] = value;
  };

  someInstance.dequeue = function() {
    // var tempHolder = storage[count - count + 1];
    var tempHolder = storage[objcount - count + 1];
    // delete storage[count - count + 1];
    delete storage[objcount - count + 1];
    count --;
    return tempHolder;

    // need to alter code to remove properties from the front of an object
  };

  someInstance.size = function() {
    if (count < 0) {
      return 0;
    } else {
      return count;
    }
  };

  return someInstance;
};
