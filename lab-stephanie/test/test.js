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

      list.push('coffee');
      expect(list[0]).toEqual('coffee');
      expect(list.length).toEqual(1);

      list.push('mug');
      expect(list[1]).toEqual('mug');
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

  describe('testing map', () => {
    let divide = (x) => x/2;
    let multiply = (x) => x*5;

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

  describe('testing filter', () => {
    it('should return an array that only contains 1\'s', () => {
      let list = new List;
      list = ['cat', 'coffee', '1', 1, 1];
      expect(list.filter(1)).toEqual(['1',1,1]);
    });
  });

  describe('testing slice', () => {
    it('should return [1,2]', () => {
      let list = new List;
      list = [0,1,2,3,4];
      expect(list.slice(1,3)).toEqual([1,2]);
    });
  });
});
