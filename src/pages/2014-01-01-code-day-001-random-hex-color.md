---
title: Random Color
author: singuerinc
layout: post
categories:
  - javascript
  - colors
  - random
---


Para empezar algo de Javascript simple: **random hex color**.

```javascript
var color = '#'+Math.floor(Math.random()*16777215).toString(16);
console.log(color);
```

<a href="/static/code/day-001/index.html" target="_blank">Demo</a>
