'use strict';

const List = module.exports = function(){
  this.length = 0;
};

List.prototype.push = function(value){
  this[this.length] = value;
  this.length++;
};

List.prototype.pop = function(){
  if (this.length < 1) return
  let result = this[this.length - 1];
  delete this[this.length - 1]
  this.length--;
  return result;
}

List.prototype.map = function(callback){
  let i;
  for(i = 0; i<this.length; i++){
    let mapping = callback(i);
    return mapping;
  }
};
List.prototype.filter = function(data){
  let results = this.copy(this);
  for(let i = 0; i < this.length; i++){
    if(this[i] === data) results.push(data);
  }
  return results;
};
//O(n)
List.prototype.map = function(callback){
  let array1 =[];
  for (var i = 0; i < this.length; i++) {
    array1.push(callback(this[i]));
  }
  return(array1);
};

List.prototype.reduce = function(callback, initialVal) {
  let acc;
  if(initialVal !== undefined) {
    acc = initialVal;
  }
  for(let i = 0; i < this.length; i++) {
    if(acc !== undefined) {
      acc = callback(acc, this[i]);
    }
    else {
      acc = this[i];
    }
  }
  return acc;

//, `map`, `filter`, `reduce`, and `slice
