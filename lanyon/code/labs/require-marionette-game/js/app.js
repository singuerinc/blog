define(['jquery', 'underscore', 'backbone', 'backbone.marionette', 'MapView', 'CellModel'],

  function ($, _, Backbone, Marionette, MapView, CellModel) {

    var app = new Marionette.Application();

    app.addRegions({
      layout: '#layout'
    });

    app.addInitializer(function () {
    });

    app.on('start', function () {

      var EXTERNAL_JSON = false;

      if (EXTERNAL_JSON) {

        $.ajax({
          url: "./js/map.json",
          dataType: 'json',
          context: this
        }).done(function (data) {

          var mapData = _.shuffle(data);
          app._createMap.call(this, mapData);

        });

      } else {

        var styles = [
          "bg-navy",
          "bg-blue",
          "bg-aqua",
          "bg-teal",
          "bg-olive",
          "bg-green",
          "bg-lime",
          "bg-yellow",
          "bg-orange",
          "bg-red",
          "bg-fuchsia",
          "bg-purple",
          "bg-maroon",
          "bg-gray",
          "bg-silver",
          "bg-black"
        ];

        var cells = [];

        for (var i = 0; i < 6; i++) {
          for (var j = 0; j < 2; j++) {
            cells.push({
              code: i,
              css: styles[i]
            });
          }
        }

        app._createMap(_.shuffle(cells));
      }

    });

    app._createMap = function (data) {

      this.map = new MapView({
        collection: new Backbone.Collection(data, {
          model: CellModel
        })
      });
      this.map.on('score:changed', function (total, resolved, maxMovs) {
        $('#score').text(resolved + '/' + total + ' - ' + maxMovs);
      });

      this.layout.show(this.map);
    };

    return app;

  });
