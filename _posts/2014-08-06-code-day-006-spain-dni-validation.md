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
Validamos un DNI espa&ntilde;ol con Javascript, puede validar tanto NIF como NIE.

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

  if (validChars.charAt(charIndex) === letter) return true;

  return false;
}

validate('12345678Z');  //true - "nif"
validate('X9464187D');  //true - "nie"
{% endhighlight %}

<a href="{{ site.baseurl | prepend: site.url }}/dni/nif/nie/validar/2015/12/22/validar-dni-nif-o-nie/index.html" target="_blank">Demo</a>
