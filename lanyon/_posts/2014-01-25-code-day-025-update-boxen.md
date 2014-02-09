---
title: <span>Day 025</span> Update Boxen
author: singuerinc
layout: post
categories:
  - boxen
---

If you have any problem to update Boxen, try this:

{% highlight sh %}
$ rm -rf /opt/boxen/repo/{.librarian,.tmp}
$ rm -rf /opt/boxen/repo/Puppetfile.lock
$ boxen --no-fde --debug
{% endhighlight %}
