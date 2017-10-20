define(['marionette'], function (Marionette) {

  return Marionette.ItemView.extend({

    id: 'user-finder',
    tagName: 'div',
    template: '#user-finder-tpl',

    modelEvents: {
      'change': '_onModelChanged'
    },

    _onModelChanged: function () {
      this.render();
    }

  });
});