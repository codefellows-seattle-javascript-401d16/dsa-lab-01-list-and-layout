'use strict';

let List = require('./lib/list.js');

let createList = () => {
  let list = new List();
  for(let i = 2; i < process.argv.length; i++)
    list.push(process.argv[i]);
  return list;
};

let theFire = createList();
let theFireArr = [...process.argv].slice(2);
console.log('List Initialize/Push', theFire);
console.log('Array Initialize/Push', theFireArr);
console.log('List Pop', theFire.pop());
console.log('Array Pop', theFireArr.pop());
console.log('List Slice', theFire.slice(2,-1));
console.log('Array Slice', theFireArr.slice(2,-1));
console.log('List Map', theFire.map(item => 'x' + item + 'x'));
console.log('Array Map', theFireArr.map(item => 'x' + item + 'x'));
console.log('List Filter', theFire.filter(item => item.length === 3));
console.log('Array Filter', theFireArr.filter(item => item.length === 3));
console.log('List Reduce', theFire.reduce((acc, item) => acc + item));
console.log('Array Reduce', theFireArr.reduce((acc, item) => acc + item));
