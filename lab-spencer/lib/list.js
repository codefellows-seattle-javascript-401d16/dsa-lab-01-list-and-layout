'use strict';

let List = module.exports = function List() {
  this.length = 0;
};

List.prototype.push = function(val) {
  if(!val) return this.length;
  this[this.length] = val;
  this.length++;
  return this.length;
};

List.prototype.pop = function() {
  if(!this.length) return;
  let result = this[this.length - 1];
  this[this.length - 1] = undefined;
  this.length--;
  return result;
};

List.prototype.reduce = function(callback, initial) {
  if(!this.length) throw new Error('TypeError: Reduce of empty list with no initial value');
  let i, accumulator;
  if(initial) {
    accumulator = initial;
    i = 0;
  } else {
    accumulator = this[0];
    i = 1;
  }
  for(i; i < this.length; i++)
    accumulator = callback(accumulator, this[i], i);
  return accumulator;
};

List.prototype.map = function(callback) {
  let result = new List();
  for(let i = 0; i < this.length; i++)
    result.push(callback(this[i]));
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
  let i, result = new List();
  if(start)
    i = start < 0 ? this.length - Math.abs(start) : start;
  else
    i = 0;
  if(end)
    end = end < 0 ? this.length - Math.abs(end) : end;
  else
    end = this.length;
  for(i; i < end; i++)
    result.push(this[i]);
  return result;
};
