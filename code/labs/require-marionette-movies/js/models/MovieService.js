define(['underscore', 'marionette'], function (_, Marionette) {
  var MovieService = Marionette.Controller.extend({

    init: function () {

      this.API_KEY = 'cb5f886745e3ea2dd5975da09b7194ce';
      this.ENDPOINT = "http://api.themoviedb.org/3";

      // get the basic configuration from "TheMovieDB" api
      $.ajax({
        type: 'GET',
        url: this.ENDPOINT + "/configuration",
        async: false,
        jsonpCallback: 'test',
        contentType: 'application/json',
        dataType: 'jsonp',
        data: {
          'api_key': this.API_KEY
        },
        success: function (data) {
          this.configuration = data;
          this.trigger('init');
        },
        context: this
      });

    },

    searchMovies: function (value, callback) {
      if (!!value) {
        $.ajax({
          type: 'GET',
          url: this.ENDPOINT + "/search/movie",
          async: false,
          jsonpCallback: 'test',
          contentType: 'application/json',
          dataType: 'jsonp',
          data: {
            'query': value,
            'api_key': this.API_KEY,
            'include_image_language': 'en'
          },
          success: function (data) {

            var images = this.configuration.images;
            var baseUrl = images.base_url + images.poster_sizes[2];

            data.results = _.filter(data.results, function (item) {
              return item.backdrop_path !== null || item.poster_path !== null;
            });

            _.each(data.results, function (item, i, arr) {
              if (item.poster_path !== null) {
                item.image = baseUrl + item.poster_path;
              } else if (item.backdrop_path !== null) {
                item.image = baseUrl + item.backdrop_path;
              }

            }, this);

            data.results = _.sortBy(data.results, 'popularity').reverse();

            callback(data.results);
          },
          context: this
        });

      } else {
        callback([]);
      }

    },

    searchMovie: function (id, callback) {
      $.ajax({
        type: 'GET',
        url: this.ENDPOINT + "/movie/" + id,
        async: false,
        jsonpCallback: 'test',
        contentType: 'application/json',
        dataType: 'jsonp',
        data: {
          'api_key': this.API_KEY
        },
        success: function (data) {
          callback(data);
        },
        context: this
      });

    },

    imagesForMovie: function (id, callback) {
      $.ajax({
        type: 'GET',
        url: this.ENDPOINT + "/movie/" + id + '/images',
        async: false,
        jsonpCallback: 'test',
        contentType: 'application/json',
        dataType: 'jsonp',
        data: {
          'api_key': this.API_KEY
        },
        success: function (data) {
          callback(data);
        },
        context: this
      });

    }

  });

  return new MovieService();
});