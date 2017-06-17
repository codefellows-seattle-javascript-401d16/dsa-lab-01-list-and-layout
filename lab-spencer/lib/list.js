'use strict';

let list = module.exports = {};

function List() {
  this.length = 0;
}

list.List = List;

List.prototype.push = function(val) {
  this[this.length] = val;
  this.length++;
};

List.prototype.pop = function() {
  let result = this[this.length - 1];
  this[this.length - 1] = undefined;
  return result;
};

List.prototype.reduce = function(callback, initial) {
  let i, accumulator;
  if(initial) {
    accumulator = initial;
    i = 0;
  } else {
    accumulator = this[0];
    i = 1;
  }
  for(i; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i);
  }
  return accumulator;
};

List.prototype.map = function(callback) {
  let result = new List();
  for(let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

List.prototype.filter = function(callback) {
  let result = new List();
  for(let i = 0; i < this.length; i++) {
    if(callback(this[i]))
      result.push(this[i]);
  }
  return result;
};

List.prototype.slice = function(start, end) {
  let result = new List(), i;
  if(start) {
    i = start < 0 ? this.length - Math.abs(start) : start;
  } else {
    i = 0;
  }
  if(end) {
    end = end < 0 ? this.length - Math.abs(start) : start;
  } else {
    end = this.length;
  }
  for(i; i < end; i++) {
    result.push(this[i]);
  }
  return result;
};
