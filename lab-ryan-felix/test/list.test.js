const List = require('../list.js');
const expect = require('expect');

describe('List', () => {

  it('should construct a list', () => {
    const test = new List();
    expect(test).toExist();
    expect(test instanceof List).toEqual(true);
    expect(test.length).toEqual(0);
  });

  it('should push', () => {
    const test = new List();
    test.push('a');
    expect(test[0]).toEqual('a');
    expect(test.length).toEqual(1);
    test.push('b');
    expect(test[1]).toEqual('b');
    expect(test.length).toEqual(2);
  });

  it('should pop', () => {
    const test = new List();
    test.push('a');
    test.push('b');
    expect(test.pop()).toEqual('b');
    expect(test.length).toEqual(1);
    expect(test.pop()).toEqual('a');
    expect(test.length).toEqual(0);
    expect(test.pop()).toEqual(undefined);
    expect(test.length).toEqual(0);
  });

  it('should reduce', () => {
    const test = new List();
    test.push(1);
    test.push(2);
    test.push(3);
    const result = test.reduce((accum, cur) => accum + cur);
    expect(result).toEqual(6);
    const result2 = test.reduce((accum, cur) => accum + cur, 10);
    expect(result2).toEqual(16);
  });

  it('should map', () => {
    const test = new List();
    test.push(1);
    test.push(2);
    test.push(3);
    const result = test.map((val) => val * 2);
    expect(result[0]).toEqual(2);
    expect(result[1]).toEqual(4);
    expect(result[2]).toEqual(6);
  });

  it('should filter', () => {
    const test = new List();
    test.push(2);
    test.push(3);
    test.push(4);
    test.push(5);
    const result = test.filter((val) => val % 2 === 0);
    expect(result.length).toEqual(2);
    expect(result[0]).toEqual(2);
    expect(result[1]).toEqual(4);
  });

  it('should slice', () => {
    const test = new List();
    test.push('h');
    test.push('e');
    test.push('l');
    test.push('l');
    test.push('o');
    const result = test.slice(0,3);
    expect(result.length).toEqual(3);
    expect(result[0]).toEqual('h');
    const result2 = test.slice(2);
    expect(result2.length).toEqual(3);
    expect(result2[0]).toEqual('l');
    const result3 = test.slice(1,3);
    expect(result3.length).toEqual(2);
    expect(result3[0]).toEqual('e');
  });

});
