# Recreating Array with List

The goal of this module is to create the Array object from scratch, calling it List.

## Methods I created for List
- .push()
- .pop()
- .reduce()
- .map()
- .filter()
- .slice()

## Functionality
Every method works the same way as it does on Array (aside from List returning an Array-like Object).
```
myList.pop() === myArr.pop()
myList.slice(2,-1) === myArr.slice(2,-1)
myList.map(item => 'x' + item + 'x') === myArr.map(item => 'x' + item + 'x')
myList.filter(item => item.length === 3) === myArr.filter(item => item.length === 3)
myList.reduce((acc, item) => acc + item) === myArr.reduce((acc, item) => acc + item)
```

## Command Line Interface
The command line interface allows you to enter in any number of arguments (after 'node index.js') that will be push into both a List and an Array and then run through each method on both of them to show you that the methods work correctly.

## Testing
I wrote multiple tests for each method to ensure that it works correctly under any condition an Array would.
