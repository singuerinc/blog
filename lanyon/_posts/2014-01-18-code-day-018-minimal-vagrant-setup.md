---
title: <span>Day 018</span> Minimal Vagrant setup
author: singuerinc
layout: post
categories:
  - vagrant
---
Pre-requisites:

  - Vagrant
  - VirtualBox

{% highlight js %}
Vagrant.configure('2') do |config|
  config.vm.box      = 'precise32'
  config.vm.box_url  = 'http://files.vagrantup.com/precise32.box'

  config.vm.network :forwarded_port, guest: 8080, host: 8080
  config.vm.network "private_network", ip: "192.168.50.4"

  config.vm.provision :puppet do |puppet|
    puppet.manifests_path = 'puppet/manifests'
    puppet.module_path    = 'puppet/modules'
  end
end

{% endhighlight %}