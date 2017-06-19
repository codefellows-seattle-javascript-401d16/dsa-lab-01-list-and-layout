'use strict';

function List() {
  this.length = 0;
  return this;
}

List.prototype.push = function(data) {
  this[this.length] = data;
  return this.length++;
};

List.prototype.pop = function() {
  if(this.length < 1) {
    return undefined;
  }
  this.length--;
  const val = this[this.length];
  delete this[this.length];
  return val;
};

List.prototype.reduce = function(callback, initialValue = null) {
  if(this.length < 1) {
    return initialValue || undefined;
  }
  let accum = initialValue || this[0];
  for(let i = initialValue ? 0 : 1; i < this.length; i++) {
    accum = callback(accum, this[i], i, this);
  }
  return accum;
};

List.prototype.map = function(callback) {
  if(this.length < 1) {
    return new List();
  }
  return this.reduce( (av, cv, idx, arr) => {
    av.push(callback(cv, idx, arr));
    return av;
  }, new List() );
};

List.prototype.filter = function(callback) {
  if(this.length < 1) {
    return new List();
  }
  return this.reduce( (av, cv, idx, arr) => {
    if(callback(cv, idx, arr)) {
      av.push(cv);
    }
    return av;
  }, new List());
};

List.prototype.slice = function(begin = 0, end = this.length) {
  let list = new List();
  if(end < 0) {
    end = this.length + end;
  }
  if(begin >= 0) {
    for(let i = begin; i < end; i++) {
      list.push(this[i]);
    }
  } else { // begin < 0
    for(let i = this.length + begin; i < end; i++) {
      list.push(this[i]);
    }
  }
  return list;
};

module.exports = List;
