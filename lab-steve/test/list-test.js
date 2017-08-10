'use strict';

let expect = require('expect');
let List =  require('../lib/list.js');

describe('Testing list methods', () => {

  it('\'new List()\' should create a new List object with length of 0.', () => {
    let list = new List();
    expect(list.length).toEqual(0);
  });

  it('\'list.push()\'should add an item into a List object.', () => {
    let list = new List();
    list.push('new item');
    expect(list.length).toEqual(1);
    expect(list[0]).toEqual('new item');
  });

  it('\'list.pop()\'should remove an item from a List object.', () => {
    let list = new List();
    list.push('new item');
    expect(list.length).toEqual(1);
    expect(list[0]).toEqual('new item');
    list.pop();
    expect(list.length).toEqual(0);
  });

  it('\'list.reduce()\'should reduce every item in the list to a single value and return that value.', () => {
    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);
    let result = list.reduce((a, b) => a + b);
    expect(result).toEqual(6);
  });

  it('\'list.map()\'should carry out a function on every item in the list and return a new list with new values.', () => {
    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);
    let result = list.map((a) => a * 2);
    expect(result[0]).toEqual(2);
    expect(result[1]).toEqual(4);
    expect(result[2]).toEqual(6);
  });

  it('\'list.filter()\'should carry out a function on on the list and return a new list with only items that were not filtered out.', () => {
    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);
    let result = list.filter((a) => a >= 2);
    expect(result[0]).toEqual(2);
    expect(result[1]).toEqual(3);
    expect(result.length).toEqual(2);
  });

  it('\'list.slice()\'should return a new list of items between two indeces.', () => {
    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    let result = list.slice(1,3);
    expect(result[0]).toEqual(2);
    expect(result[1]).toEqual(3);
    expect(result.length).toEqual(2);
  });
});
