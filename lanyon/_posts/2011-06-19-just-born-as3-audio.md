---
title: 'Just born: as3-audio'
author: Nahuel Scotti
layout: post
categories:
  - actionscript3
  - audio
tags:
  - as3
  - as3-signals
  - audio
  - lib
  - sound
---
Hola, he comenzado a desarrollar **as3-audio** en una peque&ntilde;a librer&iacute;a para simplificar la reproducci&oacute;n y controlar sonidos.

No tendr&aacute; la posibilidad de crear sonidos sino que est&aacute; pensada m&aacute;s para el desarrollo en websites/apps. La idea es simplificar un poco el trabajo con sonido en Actionscript, y tener algunas funciones b&aacute;sicas como *play, pause, resume, stop* y otras &uacute;tiles como * fadeIn, fadeOut, delay*, etc.

<!--break-->

Otra de las caracter&iacute;sticas que destacar&aacute; es la utilizaci&oacute;n de [as3-signals][2] para notificar los eventos.

De momento est&aacute; en desarrollo, puedes encontrar el c&oacute;digo en github: [as3-audio][3], la classe **Audio** ya es funcional. Si quieres puedes realizar un *fork* y cuando tengas algo interesante podemos incorporarlo a la librer&iacute;a!

M&aacute;s o menos, la *syntax* ser&aacute; esta:

 [2]: https://github.com/robertpenner/as3-signals
 [3]: https://github.com/singuerinc/as3-audio

{% highlight as3 %}
//Mediante la carga de un mp3:
var audio1:Audio = new Audio('audio1', 'audio.mp3');
audio1.volume = .5;
audio1.play();

//Con una Classe que extienda de Sound:
var audio2:AudioDeluxe = new AudioDeluxe('audio2', new AudioMP3());
audio2.play();
audio2.fade(, 1, 1500); //from, to, time
{% endhighlight %}
[Source][3]
