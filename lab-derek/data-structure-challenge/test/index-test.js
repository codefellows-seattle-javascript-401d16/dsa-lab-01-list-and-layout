'use strict';

const List = require('../index.js');
const expect = require('expect');

describe('test list constructor', function() {
  it('should create a new list with length 0', function() {
    let result = new List;
    expect(result.length).toEqual(0);
  })
})

describe('test push method', function() {
  it('should create a new list and add a value', function() {
    let result = new List;
    result.push(1);
    expect(result.length).toEqual(1);
    expect(result[0] === 1);
  })
})

describe('test pop method', function() {
  it('should create a new list, add a value, and remove a value', function() {
    let result = new List;
    result.push(5);
    result.push(10);
    expect(result.length).toEqual(2);
    result.pop();
    expect(result.length).toEqual(1);
    expect(result[0] === 5);
    expect(result[1] === undefined);
  })
})

describe('test map method', function() {
  it('should create a new list with double the values of original list', function() {
    let original = new List;
    original.push(1);
    original.push(2);
    original.push(3);
    expect(original.length).toEqual(3);
    let result = original.map(x => x * 2);
    expect(result.length).toEqual(3);
    expect(result[0]).toEqual(2);
    expect(result[1]).toEqual(4);
    expect(result[2]).toEqual(6);
  })
})

describe('test filter method', function() {
  it('should create a new list with filtered values', function() {
    let original = new List;
    original.push(1);
    original.push(2);
    original.push(3);
    expect(original.length).toEqual(3);
    let result = original.filter(x => x !== 2);
    expect(result.length).toEqual(2);
    expect(result[0]).toEqual(1);
    expect(result[1]).toEqual(3);
  })
})

describe('test reduce method', function() {
  it('should return a value of reduction of list values', function() {
    let original = new List;
    original.push(1);
    original.push(2);
    original.push(3);
    expect(original.length).toEqual(3);
    let result = original.reduce((x, y) => x + y);
    expect(result).toEqual(6);
  })
})

describe('test slice method', function() {
  it('should create a new list of values between begin and end indicies', function() {
    let original = new List;
    original.push(1);
    original.push(2);
    original.push(3);
    original.push(4);
    original.push(5);
    original.push(6);
    expect(original.length).toEqual(6);
    let result = original.slice(1, 5);
    expect(result.length).toEqual(4)
    expect(result[0]).toEqual(2);
    expect(result[3]).toEqual(5);
  })
})
