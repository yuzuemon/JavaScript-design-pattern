'use strict';

var newObject = {};
var newObject = new Object(); // or

// ドット構文
newObject.someKey = 'Hello World!';
var key = newObject.someKey;
console.log(key);

// 角括弧構文
newObject['someKey'] = 'Hello World2!';
var key = newObject['someKey'];

// Object.defineProperty
Object.defineProperty(newObject, 'someKey',{
  value: 'for more controle of the preperty\'s behavior',
  writable: true,
  enumerable: true,
  configurable: true
});

// Object.definePropertyの簡易表記
var defineProp = function(obj, key, value){
  config.value = value;
  Object.defineProperty(obj, key, value);
};

var person = Object.create(null);
defineProp(person, 'car', 'Delorean');
defineProp(person, 'dateObBirth', '1981');
defineProp(person, 'hasBeard', false);
console.log(key);

// Object.defineProperties
Object.definePropertis(newObject, {
  someKey: {
    value: 'Hello World3',
    writable: true
  },
  anotherKey: {
    value: 'Foo bar',
    writable: false
  }
});
console.log(key);
