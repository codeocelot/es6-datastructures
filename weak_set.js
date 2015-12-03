'use strict'
const obj = {'an':'object'}
const assert = require('assert')
let ws = new WeakSet();

/*
  WeakSet, like WeakMap, doesn't preserve references to
  values.  As a consequence, the garbage collector will
  recycle a value if the WeakMap is the only existing
  reference.
  Methods:
    add(value);
    delete(value);
    has(value);
*/
ws.add({'an':'object'}); // this won't work!
// {'an':'object'} is an object literal,
// it has no references
assert(ws.size === undefined);

ws.add(obj);
assert(ws.has(obj));  // but this works!
