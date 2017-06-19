'use strict';

const expect = require('expect');
const List = require('../lib/array-method.js');

describe('testing array-method module', () => {
  it('should have a length of 0', () => {
    let list = new List();
    expect(list.length).toEqual(0);
  });

  describe('testing push', () => {
    it('should append a value to the list', () => {
      let list = new List();
      list.push('yeeeeee yaaaaww');
      expect(list[0]).toEqual('yeeeeee yaaaaww');
      expect(list.length).toEqual(1);

      list.push('booyeah');
      expect(list[1]).toEqual('booyeah');
      expect(list.length).toEqual(2);
    });
  });

  describe('test pop', () => {
    it('should remove a value', () => {
      let list = new List();
      list.push(1);
      list.push(2);
      list.push(3);

      let result = list.pop();
      expect(result).toEqual(3);
      expect(list.length).toEqual(2);
      expect(list[2]).toBe(undefined);

      list = new List();
      result = list.pop();
      expect(result).toEqual(undefined);
      expect(list.length).toEqual(0);
    });
  });
});

// start of map testing
describe('test map', () => {
  it('it should return {0: 2, 1: 4, 2: 6}', () => { 
    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);
    let multiplyByTwo = list.map(item => item * 2);
    expect(multiplyByTwo).toEqual({0: 2, 1: 4, 2: 6});
  });
});
