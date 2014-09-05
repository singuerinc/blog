---
title: "Validar DNI/NIE/NIF de España"
author: singuerinc
layout: post
categories:
  - javascript
  - validation
  - spain
  - dni
  - nie
  - nif
  - regex
---
Hoy validamos un dni espa&ntilde;ol, puede validar tanto nif como nie.

<script src="https://gist.github.com/singuerinc/02be0d8ca129a218c079.js?file=spain_nie_validation.js"></script>

{% highlight js %}
validate('12345678Z');  //true - "nif"
validate('X9464187D');  //true - "nie"
{% endhighlight %}

Y en ActionScript 3 puedes encontrar la clase completa <a href="https://github.com/singuerinc/singuerinc-blog/blob/master/src/net/singuerinc/labs/utils/validators/SpainDNIValidator.as" target="_blank">aqu&iacute;</a>

<a href="/code/day-006/index.html" target="_blank">Demo</a>
