'use strict';

let expect = require('expect');
let List = require('../lib/list.js');

describe('Testing List', () => {
  it('should instantiate a new List oject which is an array-like object', () => {
    let list = new List();
    expect(JSON.stringify(list)).toEqual(JSON.stringify({ length: 0 }));
  });
});

describe('Testing push', () => {
  it('should push given argument into given array', () => {
    let list = new List();
    list.push('matthew');
    expect(JSON.stringify(list)).toEqual(JSON.stringify({ '0': 'matthew', length: 1}));
  });
});

describe('Testing pop', () => {
  it('should make a shallow copy of last item in array and return it in a new array', () => {
    let list = new List();
    list.push('matthew');
    list.push('james');
    list.push('chris');
    let lastOnList = list.pop();
    expect(lastOnList).toEqual('chris');
  });
});

describe('Testing map', () => {
  it('should invoke the callback function on each item in the array', () => {
    let list = new List();
    list.push('matthew');
    list.push('james');
    list.push('mufasa');
    let toUpperCase = list.map(item => item.toUpperCase());
    expect(JSON.stringify(toUpperCase)).toEqual(JSON.stringify({ '0': 'MATTHEW', '1': 'JAMES', '2': 'MUFASA', length: 3}));
  });
});

describe('Testing filter', () => {
  it('should return every item for which the callback returns true in a new array', () => {
    let list = new List();
    list.push('matthew');
    list.push('james');
    let james = list.filter(item => item.length < 6);
    expect(JSON.stringify(james)).toEqual(JSON.stringify({ '0': 'james', length: 1 }));
  });
});

describe('Testing reduce', () => {
  it('should reduce the array to a single value and return that value', () => {
    let list = new List();
    list.push(8);
    list.push(4);
    list.push(2);
    list.push(11);
    let laurenNumbers = list.reduce((acc, curr) => acc + curr);
    expect(laurenNumbers).toEqual(25);
  });
});

describe('Testing slice', () => {
  it('should make a shallow copy of the given indexes and return them in a new array', () => {
    let list = new List();
    list.push('Sarah');
    list.push('Anthony');
    list.push('Ryan');
    let friends = list.slice(0, 2);
    expect(JSON.stringify(friends)).toEqual(JSON.stringify({ '0': 'Sarah', '1': 'Anthony', length: 2}));
  });
});
