---
title: Require.js and Javascript inheritance
author: singuerinc
layout: post
categories:
  - javascript
  - requirejs
---

Quick example, Require.js + Javascript inheritance.

Our Human class:

```javascript
define('Human', [], function() {

    // static private var
    var _numEyes = 2;

    // constructor
    var Human = function(name) {

        // public var
        this.name = name;

        // pseudo-protected var
        this._age = 0;
    };

    // instance method
    Human.prototype.walk = function() {
        return this.name + ' is walking';
    };

    Human.prototype.setAge = function(value) {
        this._age = value;
    };

    Human.prototype.getAge = function() {
        return this._age;
    };

    Human.prototype.getNumEyes = function() {
        return _numEyes;
    };

    // class static method
    Human.GET_TYPE = function() {
        return 'biped';
    };

    // class static const
    Human.NUM_LEGS = 2;

    return Human;

});
```

Extending "Human"

```javascript
define('John', ['Human'], function(Human){

    var John = function(){
        Human.call(this, 'John');
        this._age = 28;
    };

    John.prototype = Object.create(Human.prototype);

    var _super_ = Human.prototype;

    John.prototype.walk = function() {
        return _super_.walk.call(this) + ' quickly';
    };

    return John;

});
```

Create a Human

```javascript
require(['Human', 'John'], function(Human, John){

    console.log( Human.GET_TYPE() ); // biped
    console.log( Human.NUM_LEGS ); // 2


    var human = new Human('Peter');
    console.log( human.name ); // Peter
    console.log( human.walk() ); // Peter is walking
    console.log( human.getAge() ); // 0


    var john = new John();
    console.log( john.name ); // John
    console.log( john.walk() ); // John is walking quickly
    console.log( john.getAge() ); // 28
    console.log( john.getNumEyes() ); // 2

});
```
