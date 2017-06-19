'use strict';

const expect = require('expect');
const List = require('../lib/list.js');

describe('testing list', () => {
  it('should have a length of zero', () => {
    let list = new List()
    expect(list.length).toEqual(0);
  });

  describe('testing push', () => {
    it('should append a value to the list', () => {
      let list = new List();

      list.push('hi');
      expect(list[0]).toEqual('hi');
      expect(list.length).toEqual(1);

      list.push('hello');
      expect(list[1]).toEqual('hello');
      expect(list.length).toEqual(2);
    });
  });

  describe('test pop', () => {
    it('should remove a value', () => {
      let list = new List();
      list.push(1)
      list.push(2)
      list.push(3)

      let result = list.pop();
      expect(result).toEqual(3);
      expect(list.length).toEqual(2);
      expect(list[2]).toBe(undefined);

      list = new List();
      result = list.pop();
      expect(result).toEqual(undefined);
      expect(list.length).toEqual(0);
    })


  });

//   describe('test map', () => {
//     it('should return an altered version of the input', () =>{
//       let list = new List();
//       let callback = ;
//       let
//     })
//   });
// });
