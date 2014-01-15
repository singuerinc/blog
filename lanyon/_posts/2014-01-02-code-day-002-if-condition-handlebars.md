---
title: Day 002 - if condition Handlebars
author: singuerinc
layout: post
categories:
  - nodejs
  - handlebars
  - javascript
---
Hoy: Handlebars/Javascript, **if condition helper**

{% highlight js %}
handlebars.registerHelper('ifCond', function(v1, cond, v2, opt){
	switch (cond) {
		case '==':
			return (v1 ==  v2) ? opt.fn(this) : opt.inverse(this);
		case '===':
			return (v1 === v2) ? opt.fn(this) : opt.inverse(this);
		case '<':
			return (v1 <   v2) ? opt.fn(this) : opt.inverse(this);
		case '<=':
			return (v1 <=  v2) ? opt.fn(this) : opt.inverse(this);
		case '>':
			return (v1 >   v2) ? opt.fn(this) : opt.inverse(this);
		case '>=':
			return (v1 >=  v2) ? opt.fn(this) : opt.inverse(this);
		default:
			return opt.inverse(this);
	}
});
{% endhighlight %}

Ejemplo:

{% highlight xml %}
	
#ifCond blog '===' 'singuerinc'
<node>blog ok</node>
/ifCond
	
{% endhighlight %}