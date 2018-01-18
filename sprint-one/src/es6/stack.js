class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.Stack = [];
  }
  push(value) {
    this.Stack.push(value);
  }
  pop() {
    return this.Stack.pop();
  }
  size() {
    return this.Stack.length;
  }
}