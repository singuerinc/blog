---
title: Perfect HTML5 Video Sync
author: singuerinc
layout: post
categories:
  - javascript
  - video
  - html5
  - sync
---

When you work with video and Javascript and you need to tracking an object you can't trust in video events or time, you need to identify each frame, because if the frame rate drops or anything else happends you need to stay in sync.

There are a lot of tutorials of how to do this in ActionScript:
[1](http://labs.eric-decker.com/2011/08/video-sync-issues-with-flash-as3/)
[2](http://zehfernando.com/2011/flash-video-frame-time-woes/)
[3](http://nikohelle.net/2011/11/25/as3-perfect-video-sync-with-embedded-frame-numbers/)

But I want to focus on JavaScript, as described in these tutorials you need to write in each frame the frame number in binary (with black and white). There is a script for After Effect that do the job for you.

So, how we get this data?

```javascript
// get the video element
var video = document.getElementById('video');

// create a tmp canvas element and get the context
var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');

function loop(){

    // draw from the video those pixels that contains binary data
    ctx.drawImage(video, 1281, 0, 1, 48, 0, 0, 1, 48);

    // get pixels data
    var pixData = ctx.getImageData(0, 0, 1, numPixToRead).data;

    var binStr = '';
    for (var i = 0, n = pixData.length; i < n; i += 4) {
        //the pixel data has 4 values by pixel read (r,g,b,a)

        // after the video compression the pixels
        // aren't black (0) or white (255) so we need to
        // separate them by luminosity and convert in 0s and 1s
        var binNum = pixData[i] > 127 ? 1 : 0;

        // store binary num in reverse order
        binStr = binNum + '' + binStr;
    }

    // convert binary string into decimal, you have the FRAME number
    var frame = parseInt(binStr, 2); //1,2,3,4,5....
}

function animate() {
    loop();
    requestAnimationFrame(animate);
};

animate();

```

<a href="https://gist.github.com/singuerinc/8600823" target="_blank">Code source</a>

<a href="/static/code/day-022/index.html" target="_blank">Demo</a> (binary pixels are on top-right)
