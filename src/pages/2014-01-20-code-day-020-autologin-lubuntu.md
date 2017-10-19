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
```bash
$ sudo vim /etc/lxdm/default.conf
```

And change the line:

`autologin=yourusernamehere`

For **Lubuntu 12.10** and above
```bash
$ sudo vim /etc/lightdm/lightdm.conf
```

And then change this line:

`autologin-user=yourusernamehere`