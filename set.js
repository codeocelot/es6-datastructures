'use strict'
const assert = require('assert');
let s = new Set();
const obj = {name:"Object"}
const arr = ['an','array']

/*
  Methods:
    add(value);
    delete(value);
    has(value);
*/
s.add("hello").add({name:"Object"}).add(['an','array']).add(obj).add(arr);
assert(s.has('hello'));
assert(s.has(obj))
assert(!s.has({name:"Object"})); // set uses deep equals
assert(!s.has(['an','array']));
assert(s.has(arr)); // arrays are compared using deep equals

module.exports = s;
