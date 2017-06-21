'use strict';

const List = module.exports = function() {
  this.length = 0;
};

List.prototype.push = function(value) {
  this[this.length] = value;
  this.length++;
};

List.prototype.pop = function() {
  if (this.length < 1) return;
  let result = this[this.length - 1];
  delete this[this.length -1];
  this.length--;
  return result;
};

List.prototype.map = function(callback) {
  let result = [];
  for (let i=0; i<this.length; i++) {
    result.push(callback(this[i]));
  } return result;
};

List.prototype.slice = function(arg, args) {
  let result = [];
  for (var i =arg; i< args; i++)
    result.push(this[i]);
  return result;
};

List.prototype.filter = function(arg) {
  let result = [];
  for (let i=0; i<this.length; i++) {
    if(arg ==this[i])
      result.push(this[i]);
  } return result;
};

List.prototype.reduce = function(callback, val) {
  let i = 0;
  if (val) {
    i = val;
  }
  for (i = i ; i < this.length; i++) {
    let result = callback(result, this[i]);
    return result;
  }
};
