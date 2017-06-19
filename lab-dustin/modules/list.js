
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

List.prototype.map = function(callback){
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  } return result;
};

List.prototype.reduce = function(callback, val){
  let result, i;

  if (val) {
    result = val;
  } else {
    result = 0;
  }

  for (i; i < this.length; i++) {
    result = callback(result, this[i]);
  } return result;
};

List.prototype.slice = function(arg1, arg2){
  let result = [];
  for (let i = arg1; i < arg2; i++) {
    result.push(this[i]);
  } return result;
};


List.prototype.filter = function(callback){
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback[i])  {
      result.push(this[i]);
    }
  } return result;
};
