'use strict';

const List = require('../modules/list.js');
const expect = require('expect');

describe('Testing list.js.', () => {
  it('Should have a length of 0.', () => {
    let list = new List();
    expect(list.length).toEqual(0);
  });
  describe('Testing push.', () => {
    it('Should append a value to the list.', () => {
      let list = new List();
      list.push('pewpew');
      expect(list[0]).toEqual('pewpew');
      expect(list.length).toEqual(1);
      list.push('yeahyeah');
      expect(list[1]).toEqual('yeahyeah');
      expect(list.length).toEqual(2);
    });
  });

  describe('Testing pop.', () => {
    it('Should remove a value from the list.', () => {
      let list = new List();
      list.push(1);
      list.push(2);
      list.push(3);
      list.pop();
      expect(list.length).toEqual(2);
    });
  });
});
