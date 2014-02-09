---
title: <span>Day 026</span> Batch image generation with Node.js
author: singuerinc
layout: post
categories:
  - nodejs
  - async
  - fabricjs
  - canvas
  - png
---

I wanted to generate up to 2000 pngs with random names, do that in Photoshop is a pain in the a... So I wrote this little code with Node.js, async and Fabricjs:

{% highlight js %}
var fs = require('fs'),
    fabric = require('fabric').fabric,
    async = require('async');

var names = ["Coleman", "Simon", ...];

async.eachSeries(names, function(name, callback) {

  var path = __dirname + '/images/' + name.toLowerCase() + '.png';
  var out = fs.createWriteStream(path);

  var canvas = fabric.createCanvasForNode(300, 200);

  var text = new fabric.Text(name, {
      fontFamily: 'Christopherhand',
      fontSize: 60,
      fill: '#FF0000',
      left: 0,
      top: 0
  });

  canvas.add(text);

  var stream = canvas.createPNGStream();
  stream.on('data', function(chunk) {
      out.write(chunk);
  });

  stream.on('end', function() {
      callback()
  });

}, function(err) {
    console.log('done!');
});
{% endhighlight %}
