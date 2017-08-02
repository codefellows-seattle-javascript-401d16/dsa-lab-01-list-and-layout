'use strict';

let expect = require('expect');
let List = require('../lib/list.js');

describe('testing the list', () => {
  it('should create a new list object, an array like object, with a length of 0', () => {
    let list = new List();
    expect(list.length).toEqual(0);
  });
});

describe('testing push method', () => {
  it('should push whatever passed in as argument into the array/list', () => {
    let list = new List();
    list.push(1);
    expect(list[0]).toEqual(1);
  });
});

describe('testing pop method', () => {
  it('should remove the last item from the list and return it in a new array', () => {
    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);
    let end = list.pop();
    expect(end).toEqual(3);
  });
});

describe('testing map method', () => {
  it('should invoke a function on each item in the list/array', () => {
    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);
    let end = list.map(n => n*2);
    expect(end[1]).toEqual(4);
  });
});

describe('testing filter method', () => {
  it('should test whether or not each item returns true based on a passed in callback function', () => {
    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);
    let end = list.filter(n => n<3 && n>1);
    expect(end[0]).toEqual(2);
  });
});

describe('testing reduce method', () => {
  it('should take each item in the array and reduce to a single value, returning that', () => {
    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);
    let end = list.reduce((a, b) => a + b);
    expect(end).toEqual(6);
  });
});

describe('tesdting slice method', () => {
  it('should return a new array based on the passed in index values', () => {
    let list = new List();
    list.push('this');
    list.push('is');
    list.push('something');
    let end = list.slice(0,1);
    expect(end[0]).toEqual('this');
  });
});
