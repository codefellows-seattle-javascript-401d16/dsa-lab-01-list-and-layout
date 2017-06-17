'use strict';

let List = require('../lib/list.js');
let expect = require('expect');

describe('List Object', () => {

  describe('Initialization', () => {
    it('Should return an object with length === 0', () => {
      expect(new List.List()).toEqual({length: 0});
    });
  });

  describe('Push', () => {
    it('Should add \'suuup\' and \'nah\' one after another to the end of the list', () => {
      let list = new List.List();
      list.push('suuup');
      expect(list).toEqual({0: 'suuup', length: 1});
      list.push('nah');
      expect(list).toEqual({0: 'suuup', 1: 'nah', length: 2});
    });
    it('Should push nothing, first to an empty list, then of length one and keep the List unchanged', () => {
      let list = new List.List();
      list.push();
      expect(list).toEqual({length: 0});
      list.push('YO');
      list.push();
      expect(list).toEqual({0: 'YO', length: 1});
    });
  });

  describe('Pop', () => {
    it('Should remove the last item of the list and return it', () => {
      let list = new List.List();
      list.push('suuup');
      list.push('hey');
      list.push('no');
      expect(list).toEqual({0: 'suuup', 1: 'hey', 2: 'no', length: 3});
      let no = list.pop();
      expect(no).toEqual('no');
      expect(list).toEqual({0: 'suuup', 1: 'hey', length: 2});
    });
    it('Should return undefined and keep the original list empty', () => {
      let list = new List.List();
      expect(list.pop()).toEqual(undefined);
      expect(list).toEqual({length: 0});
    });
  });

  describe('Reduce', () => {
    it('Should return 35', () => {
      let list = new List.List();
      list.push(21);
      list.push(4);
      list.push(10);
      expect(list).toEqual({0: 21, 1: 4, 2: 10, length: 3});
      let reduced = list.reduce((accumulator, next) => accumulator + next);
      expect(list).toEqual({0: 21, 1: 4, 2: 10, length: 3});
      expect(reduced).toEqual(35);
    });
    it('Should return 50 (because initial === 15)', () => {
      let list = new List.List();
      list.push(21);
      list.push(4);
      list.push(10);
      expect(list).toEqual({0: 21, 1: 4, 2: 10, length: 3});
      let reduced = list.reduce((accumulator, next) => accumulator + next, 15);
      expect(list).toEqual({0: 21, 1: 4, 2: 10, length: 3});
      expect(reduced).toEqual(50);
    });
    it('Should throw \'TypeError: Reduce of empty list with no initial value\'', () => {
      let list = new List.List();
      expect(list).toEqual({length: 0});
      expect(() => list.reduce((accumulator, next) => accumulator + next)).toThrow(Error, 'TypeError: Reduce of empty list with no initial value');
    });
  });

  describe('Map', () => {
    it('Should return a new list of the same size with the string dog added to each value', () => {
      let list = new List.List();
      list.push('suuup');
      list.push('hey');
      list.push('no');
      expect(list).toEqual({0: 'suuup', 1: 'hey', 2: 'no', length: 3});
      let mapped = list.map(item => item + 'dog');
      expect(list).toEqual({0: 'suuup', 1: 'hey', 2: 'no', length: 3});
      expect(mapped).toEqual({0: 'suuupdog', 1: 'heydog', 2: 'nodog', length: 3});
    });
    it('Should return an unchanged, empty list', () => {
      let list = new List.List();
      let mapped = list.map(item => item + 'dog');
      expect(mapped).toEqual({length: 0});
    });
  });

  describe('Filter', () => {
    it('Should return a list with only the strings from the original', () => {
      let list = new List.List();
      list.push('suuup');
      list.push(3);
      list.push('hey');
      list.push('no');
      list.push(22);
      list.push({});
      expect(list).toEqual({0: 'suuup', 1: 3, 2: 'hey', 3: 'no', 4: 22, 5: {}, length: 6});
      let filtered = list.filter(item => typeof item === 'string');
      expect(list).toEqual({0: 'suuup', 1: 3, 2: 'hey', 3: 'no', 4: 22, 5: {}, length: 6});
      expect(filtered).toEqual({0: 'suuup', 1: 'hey', 2: 'no', length: 3});
    });
    it('Should return the same list', () => {
      let list = new List.List();
      list.push('suuup');
      list.push('hey');
      list.push('no');
      expect(list).toEqual({0: 'suuup', 1: 'hey', 2: 'no', length: 3});
      let filtered = list.filter(item => item);
      expect(list).toEqual({0: 'suuup', 1: 'hey', 2: 'no', length: 3});
      expect(filtered).toEqual({0: 'suuup', 1: 'hey', 2: 'no', length: 3});
    });
    it('Should return the same empty list', () => {
      let list = new List.List();
      expect(list).toEqual({length: 0});
      let filtered = list.filter(item => item);
      expect(list).toEqual({length: 0});
      expect(filtered).toEqual({length: 0});
    });
  });

  describe('Slice', () => {
    it('Should return a list of 3, \'hey\', \'no\'', () => {
      let list = new List.List();
      list.push('suuup');
      list.push(3);
      list.push('hey');
      list.push('no');
      list.push(22);
      list.push({});
      expect(list).toEqual({0: 'suuup', 1: 3, 2: 'hey', 3: 'no', 4: 22, 5: {}, length: 6});
      let sliced = list.slice(1, 4);
      expect(list).toEqual({0: 'suuup', 1: 3, 2: 'hey', 3: 'no', 4: 22, 5: {}, length: 6});
      expect(sliced).toEqual({0: 3, 1: 'hey', 2: 'no', length: 3});
    });
    it('Should return a list from the second to last to the end 22, {}', () => {
      let list = new List.List();
      list.push('suuup');
      list.push('hey');
      list.push('no');
      list.push(22);
      list.push({});
      expect(list).toEqual({0: 'suuup', 1: 'hey', 2: 'no', 3: 22, 4: {}, length: 5});
      let sliced = list.slice(-2);
      expect(list).toEqual({0: 'suuup', 1: 'hey', 2: 'no', 3: 22, 4: {}, length: 5});
      expect(sliced).toEqual({0: 22, 1: {}, length: 2});
    });
    it('Should return second item to 2nd to last item', () => {
      let list = new List.List();
      list.push('suuup');
      list.push(3);
      list.push('hey');
      list.push('no');
      list.push(22);
      list.push({});
      expect(list).toEqual({0: 'suuup', 1: 3, 2: 'hey', 3: 'no', 4: 22, 5: {}, length: 6});
      let sliced = list.slice(1, -1);
      expect(list).toEqual({0: 'suuup', 1: 3, 2: 'hey', 3: 'no', 4: 22, 5: {}, length: 6});
      expect(sliced).toEqual({0: 3, 1: 'hey', 2: 'no', 3: 22, length: 4});
    });
    it('Should return an empty list', () => {
      let list = new List.List();
      expect(list).toEqual({length: 0});
      let sliced = list.slice(15, -5);
      expect(list).toEqual({length: 0});
      expect(sliced).toEqual({length: 0});
    });
  });
});
