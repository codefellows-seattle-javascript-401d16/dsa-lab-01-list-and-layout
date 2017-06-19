'use strict';

const List = require('./lib/list.js');

let createList = () => {
  let list = new List();
  for (let i = 2; i < process.argv.length; i++){
    list.push(process.argv[i]);
  }
  return list;
};

console.log('Instantiate new List using push:', createList());
console.log('Pop:', createList().pop());
console.log('Map:', createList().map(item => item.toUpperCase()));
console.log('Filter:', createList().filter(item => item.length < 6));
console.log('Reduce:', createList().reduce((acc, curr) => acc + curr));
console.log('Slice:', createList().slice(1));
