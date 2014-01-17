---
title: One script per day
author: singuerinc
layout: post
categories:
  - javascript
  - colors
  - random
---
Un script por d&iacute;a, eso es lo que me propongo para este 2014, no me centrar&eacute; en ning&uacute;n lenguaje, pondr&eacute; un script que me haya servido en cada d&iacute;a.

Y para empezar algo de Javascript simple: **random hex color**.

{% highlight js %}
var color = '#'+Math.floor(Math.random()*16777215).toString(16);
console.log(color);
{% endhighlight %}

<a href="/code/day-001/index.html" target="_blank">Demo</a>