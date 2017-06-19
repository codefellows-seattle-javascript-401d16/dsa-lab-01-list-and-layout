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
  let i, acc;
  if(initial){
    acc = initial;
    i = 0;
  } else {
    acc = this[0];
    i = 1;
  }
  for (i; i < this.length; i++){
    acc = callback(acc, this[i], i);
  }
  return acc;
};

List.prototype.slice = function(a, b){
  let result = new List(), i, final;
  i;
  if(a){
    i = a;
  } else {
    i = 0;
  }
  if(b){
    final = b;
  } else {
    final = this.length;
  }
  for(i; i < final; i++){
    result.push(this[i]);
  }
  return result;
};
