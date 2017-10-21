define(['marionette', 'underscore', 'models/MovieService', 'hbs!templates/gallery-item-view'], function (Marionette, _, movieService, tpl) {

  return Marionette.ItemView.extend({

    tagName: 'li',
    className: 'movie-view',
    template: {
      type: 'handlebars',
      template: tpl
    },

    events: {
      'click': 'onClick'
    },

    onClick: function (e) {
      e.preventDefault();
      document.location.href = '#movie/' + this.model.id;
    }
  });
});