define(['backbone', 'marionette', 'models/MovieService', 'hbs!templates/movie-view'], function (Backbone, Marionette, movieService, tpl) {
  return Marionette.ItemView.extend({

    tagName: 'div',
    className: 'movie-view large',
    template: {
      type: 'handlebars',
      template: tpl
    },

    model: new Backbone.Model(),

    initialize: function () {

      movieService.searchMovie(this.options.movieId, _.bind(function (data) {

        data.image = data.poster_path;
        this.model.set(data);
        this.model.set('imagesBaseUrl', movieService.configuration.images.base_url + movieService.configuration.images.poster_sizes[2]);

        movieService.imagesForMovie(this.options.movieId, _.bind(function (images) {

          this.model.set('backdrops', images.backdrops);
          this.model.set('posters', images.posters);
          this.render();

        }, this));

      }, this));

    }

  });
});