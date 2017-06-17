'use strict';

let List = require('../lib/test.js');
let expect = require('expect');

describe('List Object', () => {

  describe('Initialization', () => {
    it('Should return an object with length === 0', () => {
      expect(new List()).toEqual({length: 0});
    });
  });

  describe('Push', () => {
    it('Should add \'suuup\' and \'nah\' one after another to the end of the list', () => {
      let list = new List();
      list.push('suuup');
      expect(list).toEqual({0: 'suuup', length: 1});
      list.push('nah');
      expect(list).toEqual({0: 'suuup', 1: 'nah', length: 2});
    });
    it('Should push nothing, first to an empty list, then of length one and keep the List unchanged', () => {
      let list = new List();
      list.push();
      expect(list).toEqual({length: 0});
      list.push('YO');
      list.push();
      expect(list).toEqual({0: 'YO', length: 1});
    });
  });

  describe('Pop', () => {
    it('Should remove the last item of the array and return it', () => {
      let list = new List();
      list.push('suuup');
      list.push('hey');
      list.push('no');
      expect(list).toEqual({0: 'suuup', 1: 'hey', 2: 'no', length: 3});
      let no = list.pop();
      expect(no).toEqual('no');
      expect(list).toEqual({0: 'suuup', 1: 'hey', length: 2});
    });
    it('Should return undefined and keep the original list empty', () => {
      let list = new List();
      expect(list.pop()).toEqual(undefined);
      expect(list).toEqual({length: 0});
    });
  });

  describe('Map', () => {
    it('Should return a new list of the same size with the string dog added to each value', () => {
      let list = new List();
      list.push('suuup');
      list.push('hey');
      list.push('no');
      expect(list).toEqual({0: 'suuup', 1: 'hey', 2: 'no', length: 3});
      let mapped = list.map(item => item + 'dog');
      expect(list).toEqual({0: 'suuup', 1: 'hey', 2: 'no', length: 3});
      expect(mapped).toEqual({0: 'suuupdog', 1: 'heydog', 2: 'nodog', length: 3});
    });
    it('Should return an unchanged, empty list', () => {
      let list = new List();
      let mapped = list.map(item => item + 'dog');
      expect(mapped).toEqual({length: 0});
    });
  });
});
