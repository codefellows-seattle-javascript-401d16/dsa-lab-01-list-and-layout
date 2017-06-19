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


List.prototype.reduce = function(fn,initialVal){
  let start, result;
  if(initialVal){
    result = initialVal;
    start = 0;
  }
  else{
    result = this[0];
    start = 1;
  }

  for(let i = start; i < this.length; i++){
    result = fn(result, this[i], i, this);
  }
  return result;
};

List.prototype.map = function(fn){
  let result = new List();

  result = this.reduce((res, cur) => {
    res.push(fn(cur));
    return res;
  },result);

  return result;
};

List.prototype.filter = function(fn){
  let result = new List();

  result = this.reduce((res, cur) => {
    if(fn(cur))
      res.push(cur);
    return res;
  },result);
  return result;
};

List.prototype.slice = function(begin, end){
  let last = end ? end-1 : this.length-1;
  let result = new List();

  for(let i = begin; i <= last; i++){
    result.push(this[i]);
  }
  return result;
};