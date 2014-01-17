---
title: <span>Day 004</span> Spain - Phone validation
author: singuerinc
layout: post
categories:
  - javascript
  - validation
  - spain
  - phone
  - regex
---
Este es muy simple, una expresi&oacute;n regular para validar tel&eacute;fonos de Espa&ntilde;a en Javascript.

{% highlight js %}
function validate(value){
    var str = value.toString().replace(/\s/g, '');
    return str.length === 9 && /^[679]{1}[0-9]{8}$/.test(str);
}

validate('639 125 230'); //true
validate('668515187');   //true
validate('133 560 158'); //false
validate('932 510 258'); //true
{% endhighlight %}

Y en ActionScript 3 la clase completa puedes encontrarla <a href="https://github.com/singuerinc/singuerinc-blog/blob/master/src/net/singuerinc/labs/utils/validators/SpainPhoneValidator.as" target="_blank">aqu&iacute;</a>

<a href="/code/day-004/index.html" target="_blank">Demo</a>