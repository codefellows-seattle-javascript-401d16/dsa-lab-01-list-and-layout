const List = require('../lib/list.js')
const expect = require('expect')

let list = new List();

list[0] = 1;
list[1] = 2;
list[2] = 3;
list.length = 3;

console.log(list)

describe('testing map method', () => {
  it('should return array with values incrimented by 1', () => {
    let result = list.map(n => n + 1);
    expect(result).toEqual([2, 3, 4]);
  });
  it('should return array with values doubled', () => {
    let result = list.map(n => n * 2);
    expect(result).toEqual([2, 4, 6]);
  });
});

describe('testing filter method', () => {
  it('should return array with only even values', () => {
    let result = list.filter(n => n % 2 === 0);
    expect(result).toEqual([2]);
  });
  it('should return values less than 2', () => {
    let result = list.filter(n => n < 2);
    expect(result).toEqual([1]);
  });
});

describe('testing reduce method', () => {
  it('should return array of values summed', () => {
    let result = list.reduce((a, b) => a + b, 0);
    expect(result).toEqual(6);
  });
  it('should return the highest number', () => {
    let result = list.reduce((a, b) => b > a ? b : a, -Infinity);
    expect(result).toEqual(3);
  });
});

describe('testing slice method', () => {
  it('should return subset array from index 1 to the end of the array', () => {
    let result = list.slice(1);
    expect(result).toEqual([2, 3]);
  });
  it('should return subset array of only index 1', () => {
    let result = list.slice(1, 2);
    expect(result).toEqual([2]);
  });
});
