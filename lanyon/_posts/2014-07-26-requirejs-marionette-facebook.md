---
title: Mix of RequireJS, Marionette.js and Facebook API
author: singuerinc
layout: post
categories:
  - javascript
  - requirejs
  - marionette
  - facebook
---

This is a quick example of use a serie of libraries that work great together.<br/>I like a lot <a href="http://requirejs.org" target="_blank">RequireJS</a>, the way I can organize my modules/code with it. <a href="http://marionettejs.com/">Marionette.js</a> do a great work with the views, it takes care about everything: listeners, selectors, events, etc. And with the <a href="https://developers.facebook.com/docs/javascript" target="_blank">Facebook SDK</a> we have a lot of info to build complex or simple applications like the next one.

The example is very straightforward:

Search for your Facebook ID or, for example: "obama" or "mickeymouse"

<iframe src="/code/labs/require-marionette-facebook/index.html" style="border: 1px solid grey; width: 100%; height: 263px;"></iframe>

### How it works?
This is our basic layout:
<script src="https://gist.github.com/singuerinc/7f3c46af46752ae2aa81.js?file=index.html"></script>
Let configure RequireJS, resolve some dependencies and start our application:
<script src="https://gist.github.com/singuerinc/7f3c46af46752ae2aa81.js?file=main.js"></script>
<script src="https://gist.github.com/singuerinc/7f3c46af46752ae2aa81.js?file=app.js"></script>

The SearchView listens the "keyup" event and dispatches the current input value. It also listens when the model is updated and changes the style of himself.

<script src="https://gist.github.com/singuerinc/7f3c46af46752ae2aa81.js?file=SearchView.js"></script>

The UserView displays the information every time that the model is updated.

<script src="https://gist.github.com/singuerinc/7f3c46af46752ae2aa81.js?file=UserView.js"></script>
