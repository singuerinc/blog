define(['jquery', 'underscore', 'marionette', 'SearchView', 'GalleryView'],

  function ($, _, Marionette, SearchView, GalleryView) {

    var app = new Marionette.Application();

    app.addRegions({
      search: '#search',
      layout: '#layout'
    });

    app.addInitializer(function () {

      this.galleryView = new GalleryView();
      this.searchBox = new SearchView();

      app.search.show(this.searchBox);
    });

    app.on('images:loaded', function(images){
      this.galleryView.collection.reset(images);
      app.layout.show(this.galleryView);
    });

    app.on('start', function(){

      this.searchBox.on('search:value:changed', _.bind(function(value) {

        $.ajax({
          url: "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
          dataType: 'json',
          data: {
            tags: value,
            tagmode: "any",
            format: "json"
          },
          success: function(data) {

            var images = [];
            $.each(data.items, function(i, item){
              images.push({alt: '', src: item.media.m, link: item.link});
            });

            this.trigger('images:loaded', images);
          },
          context: this
        });

      }, this));

      this.searchBox.trigger('search:value:changed', 'auto');

    });

    return app;

  });
