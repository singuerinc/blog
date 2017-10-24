define(['marionette'], function (Marionette) {

  return Marionette.ItemView.extend({

    id: 'search-box',
    tagName: 'div',
    template: '#search-box-tpl',

    ui: {
      input: '#search-box-input'
    },

    events: {
      'keyup @ui.input': '_onInputChanged'
    },

    modelEvents: {
      'change': '_onModelChanged'
    },

    _onModelChanged: function (model) {
      var exist = model.get('id') !== '';
      this.$el.toggleClass('valid', exist);
    },

    _onInputChanged: function(e){
      this.trigger('search:value:changed', e.target.value);
    }

  });
});
