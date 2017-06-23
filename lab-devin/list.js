'use strict';

const List = module.exports = function() {
  this.length = 0;
};

List.prototype.push = function(val) {
  this[this.length] = val;
  this.length++;
  return this.length;
};

List.prototype.pop = function() {
  let result = this[this.length -1];
  this[this.length -1] = undefined;
  this.length--;
  return result;
};

List.prototype.map = function(cb) {
  let result = new List;
  for(let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }
  return result;
};

List.prototype.filter = function(cb) {
  let result = new List;
  for(let i = 0; i < this.length; i++) {
    if(cb(this[i]))
      result.push(this[i]);
  }
  return result;
};

List.prototype.reduce = function(cb, initial) {
  let i, accumulator;
  if(initial) {
    accumulator = initial;
    i = 0;
  }else {
    accumulator = this[0];
    i = 1;
  }
  for(i; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i);
  }
  return accumulator;
};

List.prototype.slice = function(start, stop) {
  let result = new List, i, end;
  i;
  if(start){
    i = start;
  }else{
    i = 0;
  }
  if(stop){
    end = stop;
  }else{
    end = this.length;
  }
  for(i; i < this.length; i++){
    result.push(this[i]);
  }
  return result;
};
