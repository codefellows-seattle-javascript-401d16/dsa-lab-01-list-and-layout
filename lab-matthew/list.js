'use strict';

let List = module.exports = function(){
  this.length =0;
};

List.prototype.push = function(value){
  this[this.length] = value;
  this.length++;
  return this.length;
};

List.prototype.pop = function(){

};

List.prototype.map = function(){

};

List.prototype.filter = function(){

};

List.prototype.reduce = function(){

};

List.prototype.slice = function(){

};
