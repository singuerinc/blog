---
title: Day 014 - Connect SequelPro to Vagrant MySQL Database
author: singuerinc
layout: post
categories:
  - mysql
  - vagrant
  - sequelpro
---

### Vagrant Options
{% highlight js %}
config.vm.network :forwarded_port, guest: 3306, host: 3306
config.vm.network "private_network", ip: "192.168.50.4"
{% endhighlight %}

### SequelPro SSH Options
Name: vagrant_connection<br/>
MySQL Host: **127.0.0.1**<br/>
Username: **root**<br/>
Password: &lt;blank&gt;<br/>
Database: &lt;optional&gt;<br/>
Port: **3306**<br/>
<br/>
SSH Host: **192.168.50.4**<br/>
SSH User: **vagrant**<br/>
SSH Password: **vagrant**<br/>
SSH Port: &lt;optional&gt;