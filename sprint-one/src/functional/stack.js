//stack is defined as "Last in" is the "first out"

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below
  // increasing
  someInstance.push = function(value) {
  //need to accept non ints and remove in order they were added
    count ++;
    storage[count] = value;
  };
  // decreasing
  someInstance.pop = function() {
  //need to accept non ints and remove in order they were added 
    var tempHolder = storage[count];
    delete storage[count];
    count --;
    return tempHolder;
  };
  // the size of something
  someInstance.size = function() {
    if (count < 0) {
      return 0;
    } else {
      return count;
    }

    //use object storage to store possible values
    
  };

  return someInstance;
};
