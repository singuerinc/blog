---
title: SequelPro + Vagrant + MySQL
author: singuerinc
layout: post
categories:
  - mysql
  - vagrant
  - sequelpro
---

Connect SequelPro to Vagrant MySQL Database

### Vagrant Options
```javascript
config.vm.network :forwarded_port, guest: 3306, host: 3306
config.vm.network "private_network", ip: "192.168.50.4"
```

### SequelPro SSH Options

| Option        | Value              |
|: ------------ |:-------------------|
| Name          | vagrant_connection |
| MySQL Host    | 127.0.0.1          |
| Username      | root               |
| Password      | &lt;blank&gt;      |
| Database      | &lt;optional&gt;   |
| Port          | 3306               |
| SSH Host      | 192.168.50.4       |
| SSH User      | vagrant            |
| SSH Host      | vagrant            |
| SSH Port      | &lt;optional&gt;   |