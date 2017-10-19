define(['jquery', 'underscore', 'backbone', 'backbone.marionette', 'views/MapView'],

  function ($, _, Backbone, Marionette, MapView) {

    var app = new Marionette.Application();

    app.addRegions({
      layout: '#layout'
    });

    app.on('start', function () {

      // reference to the h2 that will display the score
      this.score = $('#score');

      // the map view contains all the cells
      // and the main logic of the game
      this.map = new MapView();

      // when the game restarts shuffle the data,
      // this way the game is different every time
      this.map.on('game:restart', _.bind(function () {
        this.map.collection.reset();
      }, this));

      // update the score view any time the score changes
      this.map.on('game:score:changed', _.bind(function (total, resolved, maxMovs) {
        this.score.text(resolved + '/' + total + ' · ' + maxMovs);
      }, this));

      this.map.on('game:over', _.bind(function () {
        this.score.text('GAME OVER');
      }, this));

      this.layout.show(this.map);
    });

    return app;
  });
