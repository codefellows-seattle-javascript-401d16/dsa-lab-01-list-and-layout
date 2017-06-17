'use strict';

const List = module.exports = function() {
  this.length = 0;
};

List.prototype.push = function(value) {
  this[this.length] = value;
  this.length++;
};

List.prototype.pop = function(value) {
  if(this.length < 1) {
    return;
  } else {
    this[this.length] = value;
    this.length--;
  }
};
