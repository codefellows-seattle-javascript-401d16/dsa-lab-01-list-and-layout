'use strict';

const List = require('../modules/list.js');
const expect = require('expect');

describe('Testing list.js.', () => {
  it('Should have a length of 0.', () => {
    let aaa = new List();
    expect(aaa.length).toEqual(0);
  });
  describe('Testing push.', () => {
    it('Should append a value to the list.', () => {
      let bbb = new List();
      bbb.push('pewpew');
      expect(bbb[0]).toEqual('pewpew');
      expect(bbb.length).toEqual(1);
      bbb.push('yeahyeah');
      expect(bbb[1]).toEqual('yeahyeah');
      expect(bbb.length).toEqual(2);
    });
  });

  describe('Testing pop.', () => {
    it('Should remove a value from the list.', () => {
      let ccc = new List();
      ccc.push(1);
      ccc.push(2);
      ccc.push(3);
      ccc.pop();
      expect(ccc.length).toEqual(2);
    });
  });

  describe('Testing map.', () => {
    it('Should return a new mapped list.', () => {
      var ddd = new List();
      ddd.push('a');
      ddd.push('b');
      ddd.push('c');
      var mappedList = ddd.map((val) => {
        let result = val + 1;
        return result;
      });
      expect(mappedList).toEqual(2);
    });
  });

  describe('Testing filter', () => {
    it('Should return a new filtered list.', () => {
      let eee = new List();
      eee.push('a');
      eee.push(true);
      eee.push(3);
      let filteredList = eee.filter((val) => {
        if (typeof val === 'boolean') return val;
      });
      expect(filteredList[0]).toEqual(true);
    });
  });

  describe('Testing reduce.', () => {
    it('Should return the sum of the list items.', () => {
      let fff = new List();
      fff.push(1);
      fff.push(2);
      fff.push(3);
      let reducedList = fff.filter((acc, current) => acc + current);
      expect(reducedList[0]).toEqual(6);
    });
  });
});
