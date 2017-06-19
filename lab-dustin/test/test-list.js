'use strict';

const List = require('../modules/list.js');
const expect = require('expect');

describe('testing list', () => {
  it('should have length of 0', () => {
    let list = new List();
    expect(list.length).toEqual(0);
  });

  describe('testing push', () => {
    it('should append a value to the list', () => {
      let list = new List();

      list.push('beans');
      expect(list[0]).toEqual('beans');
      expect(list.length).toEqual(1);

      list.push('pickles');
      expect(list[1]).toEqual('pickles');
      expect(list.length).toEqual(2);
    });
  });

  describe('testing pop', () => {
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

  describe('testing map', () => {
    let divide = function(x) {
      return x/2;
    };
    let multiply = function(x) {
      return x*5;
    };

    it('should return an array with a function performed on it', () => {
      let list = new List();
      list.push(2);
      list.push(4);
      list.push(6);

      let result = list.map(divide);
      expect(result).toEqual([1,2,3]);

      result = list.map(multiply);
      expect(result).toEqual([10,20,30]);
    });
  });

  describe('testing reduce', () => {
    let sum = function(a,b) {
      return a+b;
    };

    it('should return reduced list filtered by input', () => {
      let list = new List();
      list.push(2);
      list.push(4);
      list.push(6);

      expect(list.reduce(sum)).toEqual(12);
    });
  });

  describe('testing slice', () => {
    it('should return a list filtered by two indexes', () => {
      let list = new List();
      list.push(2);
      list.push(3);
      list.push(4);
      list.push(5);
      list.push(6);
      expect(list.slice(1,4)).toEqual([3,4,5]);
    });
  });


  describe('testing filter', () => {
    it('should return an array that passes the callback', () => {
      let greaterThanTwo = function(x) {
        return x > 2;
      };
      let list = new List();
      list.push(2);
      list.push(3);
      list.push(4);
      list.push(5);
      list.push(6);

      console.log('list', list.filters(greaterThanTwo));
      expect(list.filter(greaterThanTwo)).toEqual([3, 4, 5, 6]);
    });
  });
});
