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
  for (var i = 0; i <this.length; i++){
    let value = callback(this[i]);
    result[result.length] = value;
  } return result;
};

List.prototype.filter = function(callback) {
  let result = [];
  for (var i = 0; i <this.length; i++) {
    if(callback[i])
      result.push(this[i]);
  } return result;
};

List.prototype.reduces = function(callback, arg) {
  let i, result;
  (arg) ? i = arg : i = 0;
  for (i; i < this.length; i++) {
    result = callback(result, this[i]);
  } return result;
};

List.prototype.slice = function(arg, args) {
  let result = [];
  for (var i = arg; i < args; i++) {
    result.push(this[i]);
  } return result;
};
