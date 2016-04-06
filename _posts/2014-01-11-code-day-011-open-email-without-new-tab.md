---
title: "mailto: !== new browser tab"
author: singuerinc
layout: post
categories:
  - javascript
  - html
  - mailto
  - iframe
---
 &iquest;Abrir el cliente de correo desde el navegador sin abrir una pesta&ntilde;a nueva? F&aacute;cil.

{% highlight js %}
function open_email(){
    var f = document.createElement('iframe');
    f.style.display = 'none';
    f.src = 'mailto:email@addre.ss';
    document.body.appendChild(f);
    document.body.removeChild(f);
}
{% endhighlight %}

<a href="{{ site.url }}/code/day-011/index.html" target="_blank">Demo</a>
