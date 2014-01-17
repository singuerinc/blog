---
title: <span>Day 006</span> Spain - dni/nie/nif validation
author: singuerinc
layout: post
categories:
  - javascript
  - validation
---
Hoy validamos un dni espa&ntilde;ol, puede validar tanto nif como nie.

{% highlight js %}
function validate(value){

  var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
  var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  var nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  var str = value.toString().toUpperCase();

  if (!nifRexp.test(str) && !nieRexp.test(str)) return false;

  var nie = str
      .replace(/^[X]/, '0')
      .replace(/^[Y]/, '1')
      .replace(/^[Z]/, '2');

  var letter = str.substr(-1);
  var charIndex = parseInt(nie.substr(0, 8)) % 23;

  if (validChars.charAt(charIndex) == letter) return true;

  return false;
}

validate('12345678Z');  //true - "nif"
validate('X9464187D');  //true - "nie"
{% endhighlight %}

Y en ActionScript 3 la clase completa puedes encontrarla <a href="https://github.com/singuerinc/singuerinc-blog/blob/master/src/net/singuerinc/labs/utils/validators/SpainDNIValidator.as" target="_blank">aqu&iacute;</a>

<a href="/code/day-006/index.html" target="_blank">Demo</a>
