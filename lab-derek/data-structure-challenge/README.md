//TODO:  Write a description of your code in your readme

# lab-Derek

Package contains one test data file and one module, index.js and index-test.js, intended as an exercise to build a constructor for an Array-like object and attach methods push, pop, map, filter, reduce, and slice to its prototype.

## index.js

index.js consists of a single class, List, which has a constructor and six methods. New List instances have a single property, length.

### push()

Push adds the argument to the constructor as a property at the next available index and increments the length by one.

### pop()

Pop deletes the value at the highest index property of the list object, and decrements the length by one.

### map()

Map takes a callback function as an argument, iterates through each property of the list object and applies the callback function, returning a new list object with the results of the callback function as a property of the new list object.

### filter()

Filter takes a callback function as an argument, iterates through each property of the list object and applies the callback function to each. Callback function must return a boolean. Filter will return a new list object with a property for each value the callback returns as true.

### reduce()

Reduce takes a callback function and optional initial value as arguments. The callback function takes two arguments, an accumulator and a list item. Reduce will iterate through the list properties and apply the callback function, adding the result to the accumulator with each iteration, returning a value equal to the reduction.

### slice()

Slice accepts two optional arguments, begin and end. Begin is the index at which to begin the slice, and end is the index BEFORE WHICH to end the slice. Slice will return a new list of all list values in between the begin and end index values. If no argument is passed in, begin defaults to 0, end defaults to the length of the list.
