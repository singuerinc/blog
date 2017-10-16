---
title: Autologin in Lubuntu
author: singuerinc
layout: post
categories:
  - ubuntu
  - lubuntu
  - login
---
Pre-requisites:

  - Lubuntu
  - Vim or Nano

For **Lubuntu 12.04** or below
{% highlight sh %}
$ sudo vim /etc/lxdm/default.conf
{% endhighlight %}

And change the line:

`autologin=yourusernamehere`

For **Lubuntu 12.10** and above
{% highlight sh %}
$ sudo vim /etc/lightdm/lightdm.conf
{% endhighlight %}

And then change this line:

`autologin-user=yourusernamehere`