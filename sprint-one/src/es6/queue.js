class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.Queue = [];
  }
  enqueue(value) {
    this.Queue.push(value);
  }
  dequeue() {
    return this.Queue.shift();
  }
  size() {
    return this.Queue.length;
  }
}
