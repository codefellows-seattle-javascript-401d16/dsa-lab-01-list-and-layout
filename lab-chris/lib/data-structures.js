'use strict';

const List = module.exports = function(){
  this.length = 0;
};

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

List.prototype.reduce = function(callback, initialValue){
  let acc = (initialValue === undefined) ? this[0]: initialValue + this[0];
  for (let i = 1 ; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;
};

List.prototype.map = function(callback){
  let list = new List();
  for (var i = 0; i < this.length; i++) {
    list.push(callback(this[i]));
  }
  return list;
};

List.prototype.filter = function(callback){
  let list = new List();
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i]))
      list.push(this[i]);
  }
  return list;
};

List.prototype.slice = function(begin, end){
  let list = new List();
  // begin === undefined ? begin = 0 : begin;
  // end === undefined ? end = this.length : end;
  for (let i = begin; i < this[end]; i++) {
    list.push(this[i]);
  }
  return list;
};
