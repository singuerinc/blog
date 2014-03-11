---
title: Nokogiri + Ubuntu installation
author: singuerinc
layout: post
categories:
  - ubuntu
  - nokogiri
  - rails
  - redmine
---

Before you install Nokogiri make sure you have all this libs installed:

{% highlight sh %}
$ sudo apt-get update
$ sudo apt-get install build-essential
$ sudo apt-get install libxml2 libxslt1-dev libxml2-dev
$ sudo gem install nokogiri -v '1.5.11'
{% endhighlight %}
