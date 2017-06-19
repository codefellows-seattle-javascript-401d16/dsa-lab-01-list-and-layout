'use strict';

const expect = require('expect');
const List = require('../lib/list.js');

describe('testing list', () => {
  it('should have a lenth of zero', () => {
    let list = new List();
    expect(list.length).toEqual(0);
  });

  describe('testing push', () => {
    it('should append a value to the list', () => {
      let list = new List();

      list.push('one');
      expect(list[0]).toEqual('one');
      expect(list.length).toEqual(1);

      list.push(20);
      expect(list[1]).toEqual(20);
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
    it(`should return { '0': 50, '1': 20, '2': 100, length: 3 }`, () => {
      let list = new List();
      list.push(5);
      list.push(2);
      list.push(10);

      let listResult = new List();
      listResult.push(50);
      listResult.push(20);
      listResult.push(100);
      expect(list.map((item) => item * 10)).toEqual(listResult);
    });
  });

  describe('testing reduce', () => {
    it(`should return 20`, () => {
      let list = new List();
      list.push(5);
      list.push(5);
      list.push(5);
      list.push(5);

      expect(list.reduce((a,c) => a+c)).toEqual(20);
    });
  });

  describe('testing filter', () => {
    it(`should return {'0':10, '1':20, 'length': 2}`, () => {
      let list = new List();
      list.push(10);
      list.push(4);
      list.push(20);
      list.push(8);

      let resultList = new List();
      resultList.push(10);
      resultList.push(20);
      expect(list.filter((x) => x >= 10)).toEqual(resultList);
    });
  });

  describe('testing slice', () => {
    it(`should return { '0': 12, '1': 123 , length: 3 } `, () => {
      let list = new List();

      list.push(1);
      list.push(12);
      list.push(123);
      list.push(1234);
      
      let resultList = new List();
      resultList.push(12);
      resultList.push(123);

      expect(list.slice(1,3)).toEqual(resultList);
    });
  });
});