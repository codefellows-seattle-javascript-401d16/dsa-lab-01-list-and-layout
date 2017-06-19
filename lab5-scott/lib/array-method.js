'use strict';

const List = module.exports = function() {
  this.length = 0;
};

List.prototype.push = function(value) {
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
  let result = new List();
  for (var i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

List.prototype.filter = function(callback){
  let result = new List();
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      delete this[i];
    } else{
      result.push(this[i]);
    }
  }
  return result;
};

List.prototype.reduce = function(callback){
// need to build an accumulator that holds the callback function of adding the previous index number to the current one. Also an conditional statement in case there is nothing in the array to start with. 
};
