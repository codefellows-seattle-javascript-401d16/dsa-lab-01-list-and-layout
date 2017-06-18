'use strict';

const List = module.exports = function() {
  this.length = 0;
};

List.prototype.push = function(value) {
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

List.prototype.map = function(list, callback){
  let newList = {};
  newList[this.length] =
  let result =
  callback(result);
};

let callback = (propertyName, propertyValue) => {
  let propertyName = this.length;
  for (var i = 0    let callback = () => {
      for (var i = 0; i < this.length; i++) {
        this[i] =
      }
    }; i < this.length; i++) {
    this[i] =
  }
};
