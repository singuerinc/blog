define(['marionette', 'backbone', 'GalleryItemView'], function (Marionette, Backbone, GalleryItemView) {
  return Marionette.CollectionView.extend({

    tagName: 'ul',
    className: 'gallery-view',
    childView: GalleryItemView,
    collection: new Backbone.Collection()

  });
});