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
    let testList = new list.List();
    testList.push(1);
    testList.push(2);
    testList.push(3);
    let mapList = testList.map((item) => item + 1);
    it('should retrun a new modified list', () => {
      expect(mapList[0]).toEqual(2);
      expect(mapList[1]).toEqual(3);
      expect(mapList[2]).toEqual(4);
    });
    it('should have a length of 3', () => {
      expect(mapList.length).toEqual(3);
    });
  });

  describe('testing filter method', () => {
    let testList = new list.List();
    testList.push(1);
    testList.push(2);
    testList.push(3);
    let filteredList = testList.filter((item) => item > 1);
    it('should retrun a new modified list', () => {
      expect(filteredList[0]).toEqual(2);
      expect(filteredList[1]).toEqual(3);
    });
    it('should have a length of 3', () => {
      expect(filteredList.length).toEqual(2);
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
    let testList = new list.List();
    testList.push(1);
    testList.push(2);
    testList.push(3);
    testList.push(4);
    let slicedList = testList.slice(1,3);
    it('should retrun a new modified list', () => {
      expect(slicedList[0]).toEqual(2);
      expect(slicedList[1]).toEqual(3);
    });
    it('should have a length of 3', () => {
      expect(slicedList.length).toEqual(2);
    });
  });
});