define(['jquery', 'underscore', 'backbone', 'marionette', 'nprogress', 'controllers/Router', 'controllers/AppController', 'views/SearchView', 'views/GalleryView', 'models/MovieService'],

  function ($, _, Backbone, Marionette, NProgress, Router, AppCtrl, SearchView, GalleryView, movieService) {

    $('#app-name').text('Movies');

    var app = new Marionette.Application();

    app.addRegions({
      search: '#search',
      layout: '#layout'
    });

    app.addInitializer(function () {

      new Router({ controller: new AppCtrl() });

      // this collection stores the search result
      this.collection = new Backbone.Collection();

      // create a search view, when user search on
      // it get data through the movie db api
      this.searchBox = new SearchView();
      this.searchBox.on('search:value:changed', _.bind(function (value) {
        // be sure we are on the home view
        document.location.hash = 'home';
        // show the progress bar
        NProgress.start();
        // search by tag
        movieService.searchMovies(value, _.bind(function (data) {
          this.collection.reset(data);
          NProgress.done();
        }, this));
      }, this));

    });

    app.on('start', function () {

      // force init at home
      document.location.hash = 'home';

      movieService.on('init', _.bind(function () {

        // display the search-box when the api
        // configuration has been loaded
        this.search.show(this.searchBox);

        if (!Backbone.History.started) {
          Backbone.history.start();

          // do an initial search
          this.searchBox.ui.input.val('Batman');
          this.searchBox.trigger('search:value:changed', this.searchBox.ui.input.val());
        }
      }, this));

      movieService.init();
    });

    return app;
  });