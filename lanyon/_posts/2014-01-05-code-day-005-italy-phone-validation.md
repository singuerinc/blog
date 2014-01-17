---
title: <span>Day 005</span> Italy - Phone validation
author: singuerinc
layout: post
categories:
  - actionscript3
  - validation
  - italy
  - phone
  - regex
---
Igual que el de ayer, pero para Italia y m&aacute;s complejo, una expresi&oacute;n regular para validar tel&eacute;fonos con ActionScript 3.

{% highlight as3 %}
private function validate(value:String):Boolean {

	var a:RegExp = /^((0039){0,1})313[0-9]{7}$/,
	b:RegExp = /^((0039){0,1})3{1}(((?>3)[013456789]{1})|((?>6)[0368]{1}))[0-9]{7}$/,
	c:RegExp = /^((0039){0,1})3{1}(((?>4)[02356789]{1}))[0-9]{7}$/,
	d:RegExp = /^((0039){0,1})3{1}(((?>2)[03789]{1})|((?>8)[0389]{1}))[0-9]{7}$/,
	e:RegExp = /^((0039){0,1})3{1}9{1}[0-3]{1}[0-9]{7}$/;


	var str:String = value.replace(/^\+/, '00');
	str = str.replace(/[^0-9]/g, '');

	if (str.length < 10) return false;

	var rx:Array = [a, b, c, d, e];
	for (var i:uint = 0; i < rx.length; i++) {
		if (rx[i].test(str)) return true;
	}

	return false;
}

validate('3934012345'); 		//true - "Vodafone"
validate('3936912345'); 		//true - "Vodafone"
validate('3933216547'); 		//true - "Tre"
validate('0039 368 1234567'); 	//true "TIM"
validate('380 4567321'); 		//true "Wind"
{% endhighlight %}

Algo más completo y complejo pero útil puedes encontrarlo <a href="https://github.com/singuerinc/singuerinc-blog/blob/master/src/net/singuerinc/labs/utils/validators/ItalyPhoneValidator.as" target="_blank">aqu&iacute;</a>