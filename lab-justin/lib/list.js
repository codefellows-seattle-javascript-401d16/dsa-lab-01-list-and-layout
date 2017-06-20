'use strict';

const newList = module.exports = {};

newList.List = function() {
  this.length = 0;
};

newList.List.prototype.push = function(data) {
  this[this.length] = data;
  this.length++;
};

newList.List.prototype.pop = function() {
  let result = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return result;
};

newList.List.prototype.map = function(callback) {
  let result = new newList.List();
  for(let i = 0; i < this.length; i++) result.push(callback(this[i]));
  return result;
};

newList.List.prototype.filter = function(callback) {
  let result = new newList.List();
  for(let i = 0; i < this.length; i++) if(callback(this[i])) result.push(this[i]);
  return result;
};

newList.List.prototype.reduce = function(callback, initialValue) {
  let result = new newList.List;
  let acc = 0;
  if(initialValue) acc = initialValue;
  for(let i = 0; i < this.length; i++) acc = callback(acc, this[i]);
  result.push(acc);
  return result;
};

newList.List.prototype.slice = function(start, end) {
  let result = new newList.List();
  for(let i = start; i < end; i++) result.push(this[i]);
  return result;
};
