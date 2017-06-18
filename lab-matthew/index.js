'use strict'

const List = require('./lib/list.js');

let createList = () => {
  let list = new List();
  for (let i = 2; i < process.argv.length; i++){
    list.push(process.argv[i]);
  }
  return list;
};

let myList = createList();

console.log('List Initialize/Push', myList);
