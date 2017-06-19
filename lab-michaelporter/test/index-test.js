'use strict';

const expect = require('expect');
const List = require('../index.js');

describe('testing list', () => {
  it('should have a lenth of zero', () => {
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

  describe('test reduce', () => {
    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);
    it('should return 6', () => {
      let result = list.reduce((a, b) => a + b);
      expect(result).toEqual(6);
    });
    it('should return 16', () => {
      let result = list.reduce((a, b) => a + b, 10);
      expect(result).toEqual(16);
    });
  });

  describe('test slice', () => {
    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);
    it('should return object similar to [2, 3]', () => {
      let result = list.slice(1, 3);
      let list2 = new List();
      list2.push(2);
      list2.push(3);
      expect(result).toEqual(list2);
    });
    it('should return object similar to [2, 3]', () => {
      let result = list.slice(1);
      let list2 = new List();
      list2.push(2);
      list2.push(3);
      expect(result).toEqual(list2);
    });
    it('should return object similar to [1, 2]', () => {
      let result = list.slice(0, -1);
      let list2 = new List();
      list2.push(1);
      list2.push(2);
      expect(result).toEqual(list2);
    });
    it('should return object similar to [1, 2]', () => {
      let result = list.slice(-1);
      let list2 = new List();
      list2.push(1);
      list2.push(2);
      expect(result).toEqual(list2);
    });
  });

  describe('test filter', () => {
    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);
    it('should return object similar to [2, 3]', () => {
      let result = list.filter((x) => x > 1);
      let list2 = new List();
      list2.push(2);
      list2.push(3);
      expect(result).toEqual(list2);
    });
    it('should return empty object', () => {
      let result = list.filter((x) => x > 10);
      let list2 = new List();
      expect(result).toEqual(list2);
    });
  });

  describe('test map', () => {
    let list = new List();
    list.push(1);
    list.push(2);
    list.push(3);
    it('should return object with values doubled', () => {
      let result = list.map((x) => x * 2);
      let list2 = new List();
      list2.push(2);
      list2.push(4);
      list2.push(6);
      expect(result).toEqual(list2);
    });
  });
});
