'use strict';

const List = module.exports = function() {
  this.length = 0;
};

List.prototype.push = function(value) {
  this[this.length] = value;
  this.length++;
};

List.prototype.pop = function() {
  if (this.length < 1) return console.error('There were no items to remove.');
  let result = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return result;
};

List.prototype.map = function(value) {
  let newList = new List();
  for (var i = 0; i < this.length; i++) () => newList.push(value(this[i]));
  return newList;
};

List.prototype.filter = function(value) {
  let newList = new List();
  for (var i = 0; i < this.length; i++) if(value(this[i])) newList.push(value(this[i]));
  return newList;
};

List.prototype.reduce = function(value, initialVal) {
  let newList = new List();
  let acc = 0;
  if(initialVal) acc = initialVal;
  for (var i = 0; i < this.length; i++) acc = value(acc, this[i]);
  newList.push(acc);
  return newList;
};
//
// List.prototype.slice = function(value) {
//
// };
