//things to remember, methods are basically objects whos values are functions-ish

// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   // var obj = {};
  
//   // obj.push = stackMethods.push;
//   // obj.pop = stackMethods.pop;
//   // obj.size = 0;

//   // extend(obj, Stack.stackMethods);

//   // return obj;
//   var obj = {};
//   obj.push = stackMethods.push;
//   obj.pop = stackMethods.pop;
//   obj.size = stackMethods.size;

//   extend(obj, Stack.stackMethods)
// };

// //create utility func extend 
// var extend = function (obj, obj2) {
//   for (var key in obj2) {
//   	obj[key] = obj2[key];
//   }
// };

// var count = 0;
// var stackMethods = {};
//   // stackMethods.push =  function(value) {
//   //   this.push++;
//   // };
//   // stackMethods.pop =  function() {
//   //   this.pop--;
//   // };
//   // stackMethods.size =  function() {
//   //   this.size;
//   // };
// stackMethods.push = function(value) {
//   //need to accept non ints and remove in order they were added
//   count ++;
//   storage[count] = value;
// };
//   // decreasing
// stackMethods.pop = function() {
//   //need to accept non ints and remove in order they were added 
//   var tempHolder = storage[count];
//   delete storage[count];
//   count --;
//   return tempHolder;
// };
//   // the size of something
// stackMethods.size = function() {
//   if (count < 0) {
//     return 0;
//   } else {
//     return count;
//   }
// };

var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.

  var obj = {};
  obj.stack = [];
// //   obj.push = stackMethods.push;
// //   obj.pop = stackMethods.pop;
// //   obj.size = stackMethods.size;
  extend(obj, stackMethods);
  return obj;
};
	
// //create utility func extend 
function extend (obj, obj2) {
  for (var key in obj2) {
  	obj[key] = obj2[key];
  }
};

// var count = 0;
var stackMethods = {};

stackMethods.push = function(value) {
  //need to accept non ints and remove in order they were added
  this.stack.push(value);
//   count ++;
//   storage[count] = value;
};
  // decreasing
stackMethods.pop = function() {
  return this.stack.pop();
//   var tempHolder = storage[count];
//   delete storage[count];
//   count --;
//   return tempHolder;
};

stackMethods.size = function() {
  return this.stack.length;
//   if (count < 0) {
//     return 0;
//   } else {
//     return count;
//   }
};
