'use strict';

module.exports = class List {
  constructor() {
    this.length = 0;
  }

  push(value) {
    this[this.length] = value;
    this.length++;
  };

  pop() {
    if (this.length < 1) return
    let result = this[this.length - 1];
    delete this[this.length - 1]
    this.length--;
    return result;
  }

  reduce(callback, accumulator) {
    let acc = accumulator
    for(let i = 0; i < this.length; i++) {
      const value = this[i];
      const index = i;
      acc = callback(acc, value, index, this)
    }
    return acc;
  }

  map(callback) {
    let acc = [];
    for(let i = 0; i < this.length; i++) {
      const value = this[i];
      const index = i;
      acc.push(callback(value, index))
    }
    return acc;
  }

  filter(callback) {
    let acc = [];
    for (let i = 0; i < this.length; i++) {
      const value = this[i];
      const index = i;
      const result = callback(value, index)
      result && acc.push(value)
    }
    return acc;
  }

  slice(begin, end) {
    const last = end || this.length;
    let arr = []
    for (let i = begin; i < last; i++) {
      arr.push(this[i]);
    }
    return arr;
  }
}
