---
title: <span>Day 010</span> Spain - Postal Code validation
author: singuerinc
layout: post
categories:
  - actionscript3
  - validation
  - spain
  - postal-code
  - regex
---
Hoy: ¿Cómo saber si es un código postal válido y español? (ActionScript 3)

{% highlight as3 %}
function validate(value:String):Boolean{
	var str:String = value.toString().replace(/\s/g, '');
	var rExp:RegExp = /((?>^[5]{1})[0-2][0-9]{3})|((?>^[0]{1})[1-9]{1}[0-9]{3})|((?>^[1-4]{1})[0-9]{1}[0-9]{3})$/;
    return str.length === 5 && rExp.test(str);
}

validate('08019'); //true - "Barcelona"
validate('28001'); //true - "Madrid"
{% endhighlight %}

La clase completa la puedes encontrar <a href="https://github.com/singuerinc/singuerinc-blog/blob/master/src/net/singuerinc/labs/utils/validators/SpainPostalCodeValidator.as" target="_blank">aqu&iacute;</a>