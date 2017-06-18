'use strict';

const list = module.exports = {};

list.List = function() {
  this.length = 0;
};

list.List.prototype.push = function(data) {
  this[this.length] = data;
  this.length ++;
};

list.List.prototype.pop = function() {
  let value = this[this.length - 1];
  delete this[this.length - 1];
  this.length --;
  return value;
};

list.List.prototype.map = function() {

};

list.List.prototype.filter = function() {

};

list.List.prototype.reduce = function(callback, initialValue) {
  let result = new list.List;
  let acc = 0;

  if(initialValue)
    acc = initialValue;
  for(let i = 0; i < this.length; i++)
    acc = callback(acc, this[i]);
  result.push(acc);
  return result;
};

list.List.prototype.slice = function() {

};