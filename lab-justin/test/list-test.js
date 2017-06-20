'use strict';

const expect = require('expect');
const list = require('../lib/list.js');

describe('testing list.js', () => {
  describe('testing push', () => {
    let test = new list.List();
    test.push('foo');
    it('should add an element to the list', () => {
      expect(test[0]).toEqual('foo');
    });
    it('should have a length of 1', () => {
      expect(test.length).toEqual(1);
    });
  });

  describe('testing pop', () => {
    let test = new list.List();
    test.push('foo');
    test.push('bar');
    test.pop();
    it('should add an element to the list', () => {
      expect(test[1]).toEqual(undefined);
    });
    it('should have a length of 1', () => {
      expect(test.length).toEqual(1);
    });
  });

  describe('testing map', () => {
    let test = new list.List();
    test.push(3);
    test.push(4);
    test.push(5);
    let map = test.map((item) => item + 1);
    it('should retrun a new modified list', () => {
      expect(map[0]).toEqual(4);
      expect(map[1]).toEqual(5);
      expect(map[2]).toEqual(6);
    });
    it('should have a length of 3', () => {
      expect(map.length).toEqual(3);
    });
  });

  describe('testing filter', () => {
    let test = new list.List();
    test.push(3);
    test.push(4);
    test.push(5);
    let filter = test.filter((item) => item > 3);
    it('should retrun a new modified list', () => {
      expect(filter[0]).toEqual(4);
      expect(filter[1]).toEqual(5);
    });
    it('should have a length of 3', () => {
      expect(filter.length).toEqual(2);
    });
  });

  describe('testing reduce', () => {
    let test = new list.List();
    test.push(1);
    test.push(2);
    test.push(3);
    let reduce = test.reduce((acc, curr) => acc + curr);
    it('should return an array with a value of 6', () => {
      expect(reduce[0]).toEqual(6);
      reduce = test.reduce((acc, curr) => acc + curr, 1);
    });
    it('should return a new list with a length of 1', () => {
      expect(reduce.length).toEqual(1);
    });
    it('should return an array with a value of 7', () => {
      expect(reduce[0]).toEqual(7);
    });
  });

  describe('testing slice', () => {
    let test = new list.List();
    test.push(3);
    test.push(4);
    test.push(5);
    test.push(6);
    let slice = test.slice(1,3);
    it('should retrun a new modified list', () => {
      expect(slice[0]).toEqual(4);
      expect(slice[1]).toEqual(5);
    });
    it('should have a length of 2', () => {
      expect(slice.length).toEqual(2);
    });
  });
});
