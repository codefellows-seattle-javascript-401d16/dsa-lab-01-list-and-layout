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
  let result = new List();
  for(var i = 0; i < this.length; i++){
    if(callback(this[i])){ result.push(callback(this[i]))}
  }
  return result;
} // => List

List.prototype.filter = function(callback){
  let result = new List();
  for(var i = 0; i < this.length; i++){
    if(callback(this[i])) { result.push(this[i]);}
  }
  return result;
}
List.prototype.slice = function(begin, end){
  if(this.length < 1) return

  let begining, ending;
  (!begin)? begining = 0 : begining = begin;
  (!end) ? ending = this.length : end -1;

  let result = new List();
  for(var i = begining; i < ending; i++){
    result.push(this[i])
  }
  return result;
}

List.prototype.reduce = function(callback, initValue) {
  let result, initialValue, array;

  (initValue)? result = initValue : result = 0; //if initial value exist

  for(var i = 0; i < this.length; i++){
    result = callback(result, this[i], i, array);
  }
  return result;
}
