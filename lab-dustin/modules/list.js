'use strict';

const List = (module.exports = function() {
  this.length = 0;
});

List.prototype.push = function(value) {
  this[this.length] = value;
  this.length++;
};

List.prototype.pop = function() {
  if (this.length < 1) return;
  let result = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return result;
};

List.prototype.map = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

List.prototype.reduce = function(acc, curr) {
  let result, i;

  if (!curr) {
    result = this[0];
    i = 1;
  } else {
    result = curr;
    i = 0;
  }

  for (i; i < this.length; i++) {
    result = acc(result, this[i]);
  }
  return result;
};

List.prototype.slice = function(arg1, arg2) {
  let result = [];
  for (let i = arg1; i < arg2; i++) {
    result.push(this[i]);
  }
  return result;
};

List.prototype.filter = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback[this[i]]) {
      result.push(this[i]);
    }
  }
  return result;
};
