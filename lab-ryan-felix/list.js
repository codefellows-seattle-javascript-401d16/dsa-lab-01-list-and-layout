function List() {
  this.length = 0;
  return this;
}

List.prototype.push = function(data) {
  this[this.length] = data;
  return this.length++;
};

List.prototype.pop = function() {
  if(this.length < 1) {
    return undefined;
  }
  this.length--;
  const val = this[this.length];
  delete this[this.length];
  return val;
};

List.prototype.reduce = function(callback, initialValue = null) {
  if(this.length < 1) {
    return undefined;
  }
  let val;
  if(initialValue) {
    val = callback(initialValue, this[0]);
  } else {
    val = this[0];
  }
  for(let i = 1; i < this.length; i++) {
    val = callback(val, this[i]);
  }
  return val;
};

List.prototype.map = function(callback) {
  if(this.length < 1) {
    return new List();
  }
  return this.reduce( (av, cv) => {
    av.push(callback(cv));
    return av;
  }, new List() );
};

List.prototype.filter = function(callback) {
  if(this.length < 1) {
    return new List();
  }
  return this.reduce( (av, cv) => {
    if(callback(cv)) {
      av.push(cv);
    }
    return av;
  }, new List());
};

List.prototype.slice = function(begin = 0, end = this.length) {
  let list = new List();
  for(let i = begin; i < end; i++) {
    list.push(this[i]);
  }
  return list;
};

module.exports = List;
