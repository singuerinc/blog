define(['jquery', 'underscore', 'backbone', 'backbone.marionette', 'views/MapView', 'models/CellModel'],

  function ($, _, Backbone, Marionette, MapView, CellModel) {

    var app = new Marionette.Application();

    app.addRegions({
      layout: '#layout'
    });

    app.on('start', function () {

      this.map = new MapView();

      this.map.on('game:restart', _.bind(function () {
        // restart the game, shuffle data
        this.map.collection.reset();
      }, this));

      this.map.on('game:score:changed', _.bind(function (total, resolved, maxMovs) {
//        $('#score').text(resolved + '/' + total);
      }, this));

      this.layout.show(this.map);
    });

    return app;

  });
