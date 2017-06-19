'use strict';


const List = module.exports = function() {
  this.length = 0;
};

List.prototype.push = function(callback) {
  this[this.length] = callback;
  this.length++;
};

List.prototype.pop = function() {
  if (this.length < 1) return console.error('There were no items to remove.');
  let result = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return result;
};

List.prototype.map = function(callback) {
  let newList = new List();
  for (var i = 1; i < this.length; i++) {
    () => newList.push(callback(this[i]));
  }
  return newList;
};

List.prototype.filter = function(callback) {
  let newList = new List();
  for (var i = 0; i < this.length; i++) {
    if(callback(this[i])) newList.push(callback(this[i]));
  }
  return newList;
};

List.prototype.reduce = function(callback, initialVal) {
  let newList = new List();
  let acc = this[0];
  acc = (initialVal) ? initialVal + acc : acc;
  let i = (initialVal) ? 1 : 0;
  console.log('i:\n', i);
  for (i ; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
    console.log('acc:\n', acc);
    newList.push(acc);
  }
  return newList;
};

List.prototype.slice = function(begin, end) {
  let newList = new List();
  for (var i = 1; i < this.length; i++) {
    if (begin < this[this.length] && end > this[this.length]) newList.push(this[i]);
  }
  return newList;
};
