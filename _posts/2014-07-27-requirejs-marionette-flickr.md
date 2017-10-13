---
title: "Photogallery: RequireJS, Marionette.js and Flickr API"
author: singuerinc
layout: post
categories:
  - javascript
  - requirejs
  - marionette
  - flickr
---

Another quick example of use <a href="http://requirejs.org" target="\_blank">RequireJS</a> and <a href="http://marionettejs.com/">Marionette.js</a> together.
In this application the user can search public photos on by tags Flickr.

<iframe src="{{ site.baseurl | prepend: site.url }}/code/labs/require-marionette-flickr/index.html" style="border: 1px solid grey; width: 100%; height: 735px;"></iframe>

<!--break-->

### How it works?

This is our basic layout:

<script src="https://gist.github.com/singuerinc/1fa7b07d1e95bb22485e.js?file=index.html"></script>

Let configure RequireJS, resolve some dependencies and start our application:

<script src="https://gist.github.com/singuerinc/1fa7b07d1e95bb22485e.js?file=main.js"></script>

Create a Marionette application and put this code:

<script src="https://gist.github.com/singuerinc/1fa7b07d1e95bb22485e.js?file=app.js"></script>

The SearchView listens the "keyup" event and dispatches the current input value.

<script src="https://gist.github.com/singuerinc/1fa7b07d1e95bb22485e.js?file=SearchView.js"></script>

The GalleryView is very simple: it has a collection and uses an "ul" as tag:

<script src="https://gist.github.com/singuerinc/1fa7b07d1e95bb22485e.js?file=GalleryView.js"></script>

The GalleryItemView is the childView of GalleryView, it defines a basic template to display the image:

<script src="https://gist.github.com/singuerinc/1fa7b07d1e95bb22485e.js?file=GalleryItemView.js"></script>

You can download the code from: <a href="https://gist.github.com/singuerinc/1fa7b07d1e95bb22485e" taget="_blank">Gist</a>
