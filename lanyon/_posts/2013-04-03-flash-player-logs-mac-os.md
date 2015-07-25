---
layout: post
title: Flash Player Debug Logs on Mac OS
date: 2013-04-03 20:00
comments: true
categories:
    - actionscript3
    - flash
    - logs
    - osx
---


&iquest;C&oacute;mo puedo ver los **trace** de Flash Player?<br/>
Es una pregunta que me repito una y otra vez cada vez que reinstalo el ordenador.

- Primero tienes que instalar la versi&oacute;n de [Flash Player Debug](http://www.adobe.com/support/flashplayer/downloads.html)
- Luego configurar el *mm.cfg* y *flashlog.txt*

Pero siempre olvido d&oacute;nde colocarlos, por eso he escrito un peque&ntilde;o script que lo hace:

{% highlight sh %}
$ MM_DIR="/Library/Application Support/Macromedia"
$ LG_DIR="${HOME}/Library/Preferences/Macromedia/Flash Player/Logs"
$ sudo mkdir -vp $MM_DIR

# create config file
$ sudo touch "${MM_DIR}/mm.cfg"

# Write mm config
$ sudo echo 'ErrorReportingEnable=1\nTraceOutputFileEnable=1' | sudo tee "${MM_DIR}/mm.cfg"

# Create Flash Player logs directory
$ mkdir -pv $LG_DIR

# Create Flash Player logs file
$ touch "${LG_DIR}/flashlog.txt"

# Add test message
$ echo 'Flashlogs test' | tee "${LG_DIR}/flashlog.txt"

# Restart the browser (w/ Flash Player "Debug" version) and execute:
$ tail -f "${LG_DIR}/flashlog.txt"
{% endhighlight %}

Para ejecutarlo:

- Abre simplemente una ventana de Terminal y escribe:

{% highlight sh %}
curl -L https://gist.github.com/singuerinc/5296967/raw/logs.sh | sh
{% endhighlight %}

- Reinicia el navegador.

- Visualiza los logs ejecutando en el Terminal lo siguiente:

{% highlight sh %}
tail -f ~/Library/Preferences/Macromedia/Flash\ Player/Logs/flashlog.txt
{% endhighlight %}
