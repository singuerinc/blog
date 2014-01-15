---
title: Day 009 - Any node version on OpenShift
author: singuerinc
layout: post
categories:
  - javascript
---
Hoy: &iquest;C&oacute;mo instalamos una versi&oacute;n espec&iacute;fica de Node.js en OpenShift?

{% highlight bash %}
$ git clone REPO_URL
$ git remote add upstream -m master git://github.com/openshift/nodejs-custom-version-openshift.git
$ git pull -s recursive -X theirs upstream master
$ echo "0.10.15" >> .openshift/markers/NODEJS_VERSION
$ git commit . -m 'use Node version 0.10.15'
$ git push origin master
{% endhighlight %}