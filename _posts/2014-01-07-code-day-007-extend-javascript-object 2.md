---
title: Extend with plain Javascript
author: singuerinc
layout: post
categories:
  - javascript
  - prototype
---
Hoy un m&eacute;todo r&aacute;pido para simular herencia en Javascript.

{% highlight js %}
function extend(Child, Parent) {
    Child.prototype = (
        function (){
            function F() {};
            F.prototype = Parent.prototype;
            return new F;
        }
    )();
    Child.prototype.constructor = Child;
    Child.parent = Parent.prototype;
    return Child.prototype;
};
{% endhighlight %}

Y c&oacute;mo lo usamos:

{% highlight js %}
var Animal = (function(){
    var Clazz = function(){
        this.name = 'Animal';
    };
    var p = extend(Clazz, Object);
    p.run = function() {
        console.log(this.name + ' running.');
    }
    return Clazz;
})();

var Dog = (function(){
    var Clazz = function(){
        this.name = 'Dog';
    };
    extend(Clazz, Animal);
    return Clazz;
})();

var cat = new Animal();
cat.run() // "Animal runnning"

var dog = new Dog();
dog.run() // "Dog runnning"
{% endhighlight %}