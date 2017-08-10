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
  if (this.length === 0) return;
  let result = this[this.length - 1];
  this[this.length - 1] = undefined;
  this.length--;
  return result;
};

List.prototype.reduce = function(cb, init){
  let start, result;
  if(init){
    result = init;
    start = 0;
  } else{
    result = this[0];
    start = 1;
  }

  for(let i = start; i < this.length; i++){
    result = cb(result, this[i], i, this);
  }
  return result;
};

List.prototype.map = function(cb){
  let result = new List();
  result = this.reduce((res, cur) => {
    res.push(cb(cur));
    return res;
  }, result);
  return result;
};

List.prototype.filter = function(cb){
  let result = new List();
  result = this.reduce((res, cur) => {
    if(cb(cur))
      res.push(cur);
    return res;
  }, result);
  return result;
};

List.prototype.slice = function(a, b){
  let result = new List();
  let i;
  let final;
  if(a) {
    i = a;
  } else {
    i = 0;
  }
  if(b) {
    final = b;
  } else {
    final = this.length;
  }
  for(i; i < final; i++){
    result.push(this[i]);
  }
  return result;
};
