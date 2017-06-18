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

List.prototype.reduce = function(acc, val){
    if (this.length < 1) return;
};

// List.prototype.map = function(callback){

// };

// List.prototype.filter = function(callback){

// };

// List.prototype.slice = function(callback){

// };
