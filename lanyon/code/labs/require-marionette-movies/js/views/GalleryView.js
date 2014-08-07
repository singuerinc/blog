define(['require', 'marionette', 'backbone', 'isotope', 'views/GalleryItemView'], function (require, Marionette, Backbone, Isotope, GalleryItemView) {
  return Marionette.CollectionView.extend({

    tagName: 'ul',
    className: 'gallery-view',
    childView: GalleryItemView,
    collection: new Backbone.Collection(),
    childEvents: {
      'movie:info': 'onRender'
    },

    initialize: function(){
      this.app = require('app');
      this.listenTo(this.app.collection, 'reset', this._onAppCollectionReset);
    },

    _onAppCollectionReset: function(collection){
      this.collection.reset(collection.models);
    },

    onRender: function () {
      new Isotope(this.$el.get(0), {
        itemSelector: '.movie-view',
        layoutMode: 'masonry',
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
    }

  });
});