'use strict';

const List = module.exports = function(){
  this.length = 0;
};

let list = new List();

List.prototype.push = function(value){
  this[this.length] = value;
  this.length++;
};

List.prototype.pop = function(){
  if (this.length < 1) return;
  let result = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return result;
};

List.prototype.reduce = function(callback, firstVal){
  let acc = firstVal === undefined ? this[0]: firstVal + this[0];
  let i = firstVal === undefined ? 0 : 1;
  for (i; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;
};

List.prototype.map = function(callback){
  for (var i = 0; i < this.length; i++) {
    list.push(callback(this[i]));
  }
  return list;
};

List.prototype.filter = function(callback){
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i]))
      list.push(this[i]);
  }
  return list;
};

List.prototype.slice = function(start, end){
  start === undefined ? start = 0 : start;
  end === undefined ? end = this.length : end;
  for (let i = start; i < this[end]; i++) {
    list.push(this[i]);
  }
  return list;
};
