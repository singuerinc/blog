---
title: <span>Day 021</span> Fix click on element when video is present on iPad
author: singuerinc
layout: post
categories:
  - javascript
  - ipad
  - video
  - html5
---

You want a video on you html, an overlay layer with some information and a button.
The problem: You can't click on the button, because the click event is captured by the video element.

{% highlight html %}
<a id="btn" href="#">play</a>
<p>Lorem ipsum Duis sit nisi occaecat ut consectetur nisi eu in non consectetur in mollit officia.</p>
<video id="video" controls src="video.mp4"></video>
{% endhighlight %}

The solution: Remove the "controls" property from the video html tag.

{% highlight html %}
<a id="btn" href="#">play</a>
<p>Lorem ipsum Duis sit nisi occaecat ut consectetur nisi eu in non consectetur in mollit officia.</p>
<video id="video" src="video.mp4"></video>
{% endhighlight %}

You need also specify the correct event on the iPad:

{% highlight html %}
var ua = navigator.userAgent,
    event = (ua.match(/iPad/i)) ? "touchstart" : "click",
    video = document.getElementsByTagName("video")[0];
    btn   = document.getElementById('btn');

btn.addEventListener(event, function(e){
    video.play();
});
{% endhighlight %}

<a href="/code/day-021/index.html" target="_blank">Demo</a>
