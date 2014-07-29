define([
    'marionette',
    'underscore',
    'hbs!views/gallery-item-view'
], function (Marionette, _, tpl) {
    return Marionette.ItemView.extend({

        tagName: 'li',
        className: 'gallery-item-view',
        template: {
          type: 'handlebars',
          template: tpl
        },

        initialize: function(){

          console.log('----->', tpl);

//          var popularityWidth = function (context, options) {
//            return "width:" + Math.floor(( context.popularity * 298 ) / 100) + "px;";
//          };
//
//          var posterImage = function (context, options) {
//            return context.poster_path ? context.poster_path : '';
//          };
//
//          var backdropImage = function (context, options) {
//            return context.backdrop_path ? context.backdrop_path : context.posterImage();
//          };

//          Handlebars.registerHelper( 'popularityWidth', popularityWidth );
//          Handlebars.registerHelper( 'posterImage', posterImage );
//          Handlebars.registerHelper( 'backdropImage', backdropImage );

        }

    });
});