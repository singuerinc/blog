---
title: Day 016 - Install Node.js on Ubuntu
author: singuerinc
layout: post
categories:
  - nodejs
  - ubuntu
---
Hoy instalamos Node.js en Ubuntu!

{% highlight console %}
$ sudo apt-get install python-software-properties python g++ make
$ sudo add-apt-repository ppa:chris-lea/node.js
$ sudo apt-get update
$ sudo apt-get install nodejs
$ node --version // v0.10.24
{% endhighlight %}