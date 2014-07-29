define(['jquery', 'underscore', 'backbone', 'backbone.marionette', 'MapView', 'CellModel'],

  function ($, _, Backbone, Marionette, MapView, CellModel) {

    var app = new Marionette.Application();

    app.addRegions({
      layout: '#layout'
    });

    app.addInitializer(function () {
    });

    app.on('start', function(){

        $.ajax({
          url: "./js/map.json",
          dataType: 'json',
          context: this
        }).done(function(data) {

          var mapData = _.shuffle(data);
//          var mapData = data;

          app.map = new MapView({
            collection: new Backbone.Collection(mapData, {
              model: CellModel
            })
          });
          app.map.on('score:changed', function(total, resolved, maxMovs){
            $('#score').text(resolved + '/' + total + ' - ' + maxMovs);
          });

          app.layout.show(app.map);

        });

    });

    return app;

  });
