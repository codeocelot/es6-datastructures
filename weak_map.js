'use strict'
let wm = new WeakMap();
const assert = require('assert');
const obj = {'an':'object'};
const arr = ['an','array'];
let set = require('./set');

/*
  WeakMap holds keys 'weakly'.  If no other reference exists
  then the WeakMap'd value is garbage collected.
  For this reason, WeakMap is not enumerable (eg. forEach)
  You must keep your own list of keys.

  Methods
    set(key,value)
    get(key)
    has(key)
    delete(key)
*/
wm.set(set,{'a':'value'});
// this^ is the last reference to set
// in this execution
// garbage collector kicks in.
wm.size === undefined;
