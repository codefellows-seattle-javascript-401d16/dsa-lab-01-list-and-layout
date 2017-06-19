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

List.prototype.reduce = (callback, value) => {
  let start = 0;
  let result = 1;
  if (!value) {
    result = this[0];
    start = 1;
  }
  for (var i = start; i < this.length; i++) {
    result = callback(result, this[i]);
  }
  return result;
};

List.prototype.slice = (start, end) =>
  if (start == undefined) { start = 0; };
  if (end == undefined) { end = this.length - 1; };
  if (end < 0) { end = this.length - end; };
  if (start < this.length && end <= this.length + 1 && start < end)
  this.reduce((a, b) => {
    for (var i = start; i < end; i++) {
      return a.push(b);
    }
  }, []);

List.prototype.filter = (callback) =>
  this.reduce((a, b) => {
    if (callback(b) == false)
      return a;
    return a.push(b);

  }, []);


List.prototype.map = (callback) =>
  this.reduce((a, b) => {
    return a.push(callback(b));
  }, []);
