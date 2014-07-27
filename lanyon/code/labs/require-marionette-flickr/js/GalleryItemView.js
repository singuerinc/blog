define(['marionette', 'underscore'], function (Marionette, _) {
  return Marionette.ItemView.extend({

    tagName: 'li',
    className: 'gallery-item-view',
    template: _.template('<a href="#" data-link="<%= link %>"><img src="<%= src %>" alt="<%= alt %>" /></a>'),

    ui: {
      'a': 'a',
      'img': 'img'
    },

    events: {
      'click @ui.a': 'onClick'
    },

    onClick: function(e){
      e.preventDefault();
      window.open(this.ui.a.data('link'));
    }

  });
});