'use strict';

// TODO: Create a List constructor that is a replacement for Arrays

class List {
  constructor() {
    this.length = 0;
  };

// TODO: Add push method to the constructor
  push(value){
    this[this.length] = value;
    this.length++;
  };

// TODO: Add pop method to the constructor
  pop(){
    if (this.length <1) return;
    let result = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return result;
  }

// TODO: Add map method to the constructor

  map(callback){
    let result = new List();
    for(let i = 0; i < this.length; i++){
      result.push(callback(i));
    console.log(result);
    return result;
    }
  }

// TODO: Add filter method to the constructor


// TODO: Add reduce method to the constructor


// TODO: Add slice method to the constructor
}

let callback = function(item){
  item = item * 2;
  return item;
}

let list = new List();
list.push(1);
list.push(2);
list.push(3);
let result = list.map(callback);


console.log(list);
console.log(result);
