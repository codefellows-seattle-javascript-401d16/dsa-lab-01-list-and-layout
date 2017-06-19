'use strict';

let List = module.exports = function(){
  this.length = 0;
};

List.prototype.push = function(value){
  this[this.length] = value;
  this.length++;
  return this.length;
};

List.prototype.pop = function(){
  let result = this[this.length -1];
  this[this.length -1] = undefined;
  this.length--;
  return result;
};

List.prototype.map = function(callback){
  let result = new List();
  for(var i = 0; i < this.length; i++){
    result.push(callback(this[i]));
  }
  return result;
};

List.prototype.filter = function(callback){
  let result = new List();
  for(var i = 0; i < this.length; i++){
    if(callback(this[i])) result.push(this[i]);
  }
  return result;
};

List.prototype.reduce = function(callback, initial){
  let i, accumulator;
  if(initial){
    accumulator = initial;
    i = 0;
  } else {
    accumulator = this[0];
    i = 1;
  }
  for (i; i < this.length; i++){
    accumulator = callback(accumulator, this[i], i);
  }
  return accumulator;
};

List.prototype.slice = function(begin, end){
  let result = new List(), i, finish;
  i;
  if(begin){
    i = begin;
  } else {
    i = 0;
  }
  if(end){
    finish = end;
  } else {
    finish = this.length;
  }
  for(i; i < finish; i++){
    result.push(this[i]);
  }
  return result;
};
