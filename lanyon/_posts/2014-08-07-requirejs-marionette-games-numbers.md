---
title: "Numbers: Game in RequireJS + Marionette.js"
author: singuerinc
layout: post
categories:
  - javascript
  - requirejs
  - marionette
  - game
---

My kid (3 yrs old) is learning the numbers, so I thought that would be a good idea create a game related to this topic.
This is a classic... basic simple game, you have to find two cells with the same number, when all cells are paired the game is over.

<iframe src="/code/labs/require-marionette-game/index.html" style="border: 1px solid grey; width: 100%; height: 625px;"></iframe>

You could find the source at <a href="https://github.com/singuerinc/blog/tree/master/lanyon/code/labs/require-marionette-game" target="\_blank">GitHub</a>

<!--break-->

There are two main classes: MapView.js and CellView.js

**MapView** contains the game logic, it controls when the game restarts or has ended, if the player can click or not, how much movements you have left.<br/>
Also, it stores the score, renews the turns and marks the cells as resolved when two or more cells match.

<script src="https://gist.github.com/singuerinc/2dcd4e8e8a2cb6742e0a.js?file=MapView.js"></script>

**CellView** listen to the model changes, updates it own view and play the sounds.

<script src="https://gist.github.com/singuerinc/2dcd4e8e8a2cb6742e0a.js?file=CellView.js"></script>
