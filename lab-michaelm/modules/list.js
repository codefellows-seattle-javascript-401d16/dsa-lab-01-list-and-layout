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
  console.log('this before:\n',this);
  let newList = new List();
  for (let i = 0; i < this.length; i++) () => newList.push(value(this[i]));
  console.log('newList:\n',newList);
  return newList;
};
//
// List.prototype.filter = function(value) {
//
// };
//
// List.prototype.reduce = function(value) {
//
// };
//
// List.prototype.slice = function(value) {
//
// };
