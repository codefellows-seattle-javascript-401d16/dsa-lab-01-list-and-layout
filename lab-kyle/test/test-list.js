'use strict';

const expect = require('expect');
const list = require('../lib/list.js');

describe('testing list.js', () => {
  describe('testing push method', () => {
    let testList = new list.List();
    testList.push('foo');
    it('should add an element to the list', () => {
      expect(testList[0]).toEqual('foo');
    });
    it('should have a length of 1', () => {
      expect(testList.length).toEqual(1);
    });
  });
  describe('testing pop method', () => {
    let testList = new list.List();
    testList.push('foo');
    testList.push('bar');
    testList.pop();
    it('should add an element to the list', () => {
      expect(testList[1]).toEqual(undefined);
    });
    it('should have a length of 1', () => {
      expect(testList.length).toEqual(1);
    });
  });
  describe('testing map method', () => {
    it('should', () => {
      expect().toEqual();
    });
  });
  describe('testing filter method', () => {
    it('should', () => {
      expect().toEqual();
    });
  });

  describe('testing reduce method', () => {
    let testList = new list.List();
    testList.push(1);
    testList.push(2);
    testList.push(3);
    let reducedList = testList.reduce((acc, curr) => acc + curr);
    it('should return an array with a single value of 6', () => {
      expect(reducedList[0]).toEqual(6);
      reducedList = testList.reduce((acc, curr) => acc + curr, 1);
    });
    it('should return a new list with a length of 1', () => {
      expect(reducedList.length).toEqual(1);
    });
    it('should return an array with a single value of 7', () => {
      expect(reducedList[0]).toEqual(7);
    });       
  });

  describe('testing slice method', () => {
    it('should', () => {
      expect().toEqual();
    });
  });
});