'use strict';

// #### DATA STRUCTURE CHALLENGE
// * Create a List constructor that is a replacement for Arrays
// * Add `push`, `pop`, `map`, `filter`, `reduce`, and `slice` methods to the constructor/

//pop = result = data.slice(0, data.length - 1) removes last index in array
//shift = data.slice(1) takes off first index of array

const List = module.exports = function() {
  this.length = 0;
};

List.prototype.push = function(value) {
  this[this.length] = value;
  this.length++;
}

List.prototype.pop = function() {
  if (this.length < 1) return
  let result = this[this.length - 1]
  delete this[this.length -1]
  this.length--;
  return result;
}

List.prototype.map = function(callback) {
  let result = [];
  for ( let i=0; i<this.length; i++) {
    result.push(callback(this[i]));
  } return result;
}

List.prototype.slice = function(arg, args) {
  let result = []
  for (var i =arg; i< args; i++)
    result.push(this[i])
  } return result;
}

List.prototype.filter = function(arg) {
  let result = []
  for (i=0; i<this.length; i++) {
  if(arg ==this[i])
    result.push(this[i]);
} return result;
};

List.prototype.reduce  = function( callback, val) {
let i = result;
if (val) {
  let i = val;
} else {
  i = 0;
}
for(i; i < this.length; i++)

}
