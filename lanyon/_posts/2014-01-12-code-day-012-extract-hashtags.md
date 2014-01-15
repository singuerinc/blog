---
title: Day 012 - Extract hashtags
author: singuerinc
layout: post
categories:
  - javascript
---
Hoy: Extraer m&uacute;ltiples hashtags de una cadena de texto.

{% highlight js %}
function extract(value){
    return value.match(/\B#\w*[a-zA-Z]+\w*/ig);
}

var tags = extract("lorem #tag1 #tag2 diem #tag3");
tags; // ['#tag1', '#tag2', '#tag3']
{% endhighlight %}

<a href="/code/day-012/index.html" target="_blank">Demo</a>