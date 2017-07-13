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
      result.push(this[i]);
    }
  }
  return result;
};

List.prototype.reduce = function(callback, initial){
  let result = new List();
  let acc = 0;
  //if there's any initial value, set that to the accumulator
  if (initial) acc = initial;
  //loop through the length of this and set the acc to the result of the cb which takes in the current value of this[i] and the acc.
  for (var i = 0; i < this.length; i ++){
    acc = callback(acc, this[i]);
  }
  //push the acc in to the list called result and return it
  result.push(acc);
  return result;
};
