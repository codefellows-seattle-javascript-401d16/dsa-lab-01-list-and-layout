'use strict';

const expect = require('expect');
const List = require('./list.js');

describe('List constructor tests', () => {

  describe('testing push method', () => {
    it('should add input data to end of array', () => {
      let result = new List;
      result.push('h4x');
      expect(result[0]).toEqual('h4x');
      expect(result.length).toEqual(1);
    });
  });

  describe('testing pop method', () => {
    it('should remove last indexed item from array', () => {
      let result = new List;
      result.push('happy');
      result.push('go');

      result = result.pop();
      expect(result).toEqual('go');
      expect(result.length).toEqual(1);
    });
  });

  describe('testing map method', () => {
    it('should invoke cb on each indexed item in array, as it iterates through array', () => {
      let result = new List;
    })
  })
})
