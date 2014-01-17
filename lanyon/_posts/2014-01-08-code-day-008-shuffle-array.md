---
title: <span>Day 008</span> Shuffle Javascript array
author: singuerinc
layout: post
categories:
  - javascript
---
Este no es m&iacute;o, pero es genial: &iquest;C&oacute;mo desordenar un array?

{% highlight js %}
function shuffle(o){
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}
{% endhighlight %}