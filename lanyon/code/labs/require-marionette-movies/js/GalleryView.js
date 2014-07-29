define(['marionette', 'backbone', 'isotope', 'GalleryItemView'], function (Marionette, Backbone, Isotope, GalleryItemView) {
    return Marionette.CollectionView.extend({

        tagName: 'ul',
        className: 'gallery-view',
        childView: GalleryItemView,
        collection: new Backbone.Collection(),

        onRender: function () {
            new Isotope(this.$el.get(0), {
                itemSelector: '.gallery-item-view',
                mansory: {
                    columnWidth: 300
                }
            });
        }

    });
});