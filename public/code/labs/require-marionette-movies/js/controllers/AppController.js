define(['require', 'marionette', 'views/GalleryView', 'views/MovieView'], function (require, Marionette, GalleryView, MovieView) {

  return Marionette.Controller.extend({

    initialize: function () {
      this.layout = require('app').layout;
    },

    home: function () {
      var galleryView = new GalleryView();
      this.layout.show(galleryView);
      galleryView.onRender();
    },

    movie: function (id) {
      this.layout.show(new MovieView({movieId: id}));
    }

  });

});