# Code 401 - Lab 04

## list.js

### functions

List: creates an array-like list object.

push: pushes a new element on to the list at the next available index.

pop: removes the last element from the list and returns it.

map: Takes a callback function and applys that callback to every element in the list, and returns a new list of the same length that contains all of the modified elements.

filter: Takes a calback function that returns a boolean value and applys that callback to every element in the list. If the callback returns true than the element is added to a new list. A new, shorter list containing only values that were true is returned.  

reduce: takes a callback function and a starting value. the callback function takes an accumulator and the current element and performs an operation on them. it returns a new list containing a single element that represents the result of applying the operation to the entire list.

slice: takes a start, and end point. It returns a new list conaining only the elements that are between the two points. The ending point is non-inclusive.