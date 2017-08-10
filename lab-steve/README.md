# DSA Lab 1 List and Layout

#### The layout HTML/CSS portion is on [*my codepen*](https://codepen.io/0smium/pen/zdNWaJ).

#### The list portion with *stretch goal* is included here.

##### Instructions:

- Clone this repository: `git clone https://github.com/0smium/dsa-lab-01-list-and-layout.git`
- Navigate to the directory `dsa-lab-01-list-and-layout/lab-steve`
- Run `npm install`
- Run `npm test`

##### Tests:

- **Create:** tests for the creation of a new List object `list = new List()`
- **Push:** tests the `push` method for adding items to the List `list.push('new item')`
- **Pop:** tests the `pop` method for the removal of the last item in the List `list.pop()`
- **Reduce:** tests the `reduce` method, which 'reduces' every item in the List to a single value and return that value based on a callback.
- **Map:** tests the `map` method which uses `reduce` ***(stretch goal)*** to carry out a callback on every item in the list and return a new list with new values.
- **Filter:** tests the `filter` method which uses `reduce` ***(stretch goal)*** to carry out a callback on the list to return a new list with only items that were not filtered out.
- **Slice:** tests the `slice` method to return a new list of items between two indeces.
