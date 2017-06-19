'use strict';

const List = module.exports = function () {
  this.length = 0;
};

List.prototype.push = function (value) {
  this[this.length] = value;
  this.length++;
};

List.prototype.pop = function () {
  if (this.length < 1) return;
  let result = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return result;
};

List.prototype.reduce = function(callback, value) {
  let start;
  let result;
  if (value) {
    start = 0;
    result = value;
  } else {
    start = 1;
    result = this[0];
  }
  for (let i = start; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

List.prototype.slice = function(start, end) {
  start = start ? start : 0;
  end = end ? end : this.length;
  if (start < 0) {
    end = this.length + start;
    start = 0;
  }
  if (end < 0) { end = this.length + end; }
  let res = new List();
  if (start < this.length && end <= this.length + 1 && start < end) {
    for (let i = start; i < end; i++) {
      res.push(this[i]);
    }
  }
  return res;
};

List.prototype.filter = function(callback) {
  let result = new List();
  result = this.reduce((acc, cur) => {
    if (callback(cur))
      acc.push(cur);
    return acc;
  }, result);
  return result;
};

List.prototype.map = function(callback) {
  let res = new List();
  res = this.reduce((acc, cur) => {
    acc.push(callback(cur));
    return acc;
  }, res);
  return res;
};
