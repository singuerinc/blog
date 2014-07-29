define(['marionette', 'underscore'], function (Marionette, _) {
    return Marionette.ItemView.extend({

        tagName: 'li',
        className: 'gallery-item-view',
        template: '#gallery-item-view-tpl',

        templateHelpers: {
            popularityWidth: function () {
                return "width:" + Math.floor(( this.popularity * 298 ) / 100) + "px;";
            },
            posterImage: function () {
                return this.poster_path ? this.poster_path : '';
            },
            backdropImage: function () {
                return this.backdrop_path ? this.backdrop_path : null;
            }
        },

        ui: {

        },

        events: {

        }

    });
});