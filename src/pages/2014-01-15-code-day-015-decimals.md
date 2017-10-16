---
title: Decimals
author: singuerinc
layout: post
categories:
  - javascript
  - numbers
---
Formateamos un n&uacute;mero con decimales.

{% highlight js %}
function format(value, decimals){
    var n = Math.pow(10, decimals);
    return parseInt(value * n) / n;
}

format(5716645.406726573, 2);  // 5716645.4
format(6738963.296086764, 1);  // 6738963.2
format(1393.8190264930017, 3); // 1393.819
{% endhighlight %}

<a href="{{ site.url }}/code/day-015/index.html" target="_blank">Demo</a>
