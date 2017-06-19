'use strict';

const expect = require('expect');
const List = require('../lib/data-structures.js');

describe('testing list', () => {
  it('should have a lenth of zero', () => {
    let list = new List();
    expect(list.length).toEqual(0);
  });

  describe('testing push', () => {
    it('should append a value to the list', () => {
      let list = new List();

      list.push('hello');
      expect(list[0]).toEqual('hello');
      expect(list.length).toEqual(1);

      list.push('world');
      expect(list[1]).toEqual('world');
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
    it('should reduce an array to one value', () => {
      let list = [1,2,3];
      let result = list.reduce((acc, val) => acc + val);
      expect(result).toEqual(6);
      expect(result.length).toBe(undefined);

      list = ['apple','pear','orange'];
      result = list.reduce((acc, val) => acc + val,10);
      expect(result).toEqual('10applepearorange');
      expect(result.length).toBe(17);
    });
  });

  describe('test map', () => {
    it('should return an altered array', () => {
      let list = [1,2,3];
      let result = list.map((x) => x * 2);
      expect(result).toEqual([2, 4, 6]);
      expect(result.length).toBe(3);

      list = ['apple','pear','orange'];
      result = list.map((x)=>x.split('').reverse().join(''));
      expect(result).toEqual(['elppa', 'raep', 'egnaro']);
    });
  });

  describe('test filter', () => {
    it('should return a filtered array', () => {
      let list = [1,2,3];
      let result = list.filter((x) => x > 1);
      expect(result).toEqual([2, 3]);
      expect(result.length).toBe(2);

      list = ['apple','pear','banana'];
      result = list.filter((x)=> x.length > 6);
      expect(result).toEqual(['banana']);
      expect(result.length).toBe(1);
    });
  });

  describe('test slice', () => {
    it('should return a filtered array', () => {
      let list = [1,2,3,4,5];
      let result = list.slice(1,4);
      expect(result).toEqual([2,3,4]);
      expect(result.length).toBe(3);

      list = ['apple','pear','orange','banana'];
      result = list.slice(2);
      expect(result).toEqual(['orange', 'banana']);
      expect(result.length).toBe(2);
    });
  });
});
