'use strict'
var assert = require('assert');
const obj = {'an':'object'};
const arr = ['an','array'];

/*
  Methods
    set(key,value)
    get(key)
    has(key)
    delete(key)
*/
let m = new Map();
m.set('a','string');
m.set('b',41);
m.set('c',obj);
m.set('d',arr);
m.set(43,{'an':'other object'});
m.set(obj,'value');

assert(m.get('c')===obj);
assert(m.get(obj)==='value');

m.set(obj,obj);
m.set(arr,arr);
assert(m.get(obj)===obj);
assert(m.get(arr)===arr);

module.exports = m;
