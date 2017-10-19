---
title: Video + iPad = How to fix the click
author: singuerinc
layout: post
categories:
  - javascript
  - ipad
  - video
  - html5
---

You want a video on your html, an overlay layer with some information and a button.

**The problem:** You can't click on the button, because the click event is captured by the video element.

```html
<a id="btn" href="#">play</a>
<p>Lorem ipsum Duis sit nisi occaecat ut</p>
<video id="video" controls src="video.mp4"></video>
```

**The solution:**

1. Remove the "controls" property from the video html tag.

    `<video id="video" src="video.mp4"></video>`

2. You need also specify the correct event on the iPad:

```js
var ua = navigator.userAgent,
    event = (ua.match(/iPad/i)) ? "touchstart" : "click",
    video = document.getElementsByTagName("video")[0];
    btn   = document.getElementById('btn');

btn.addEventListener(event, function(e){
    video.play();
});
```

<a href="/static/code/day-021/index.html" target="_blank">Demo</a>
