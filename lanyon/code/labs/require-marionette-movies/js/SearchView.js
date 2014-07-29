define([
    'underscore',
    'marionette',
    "hbs!views/search-box"
    ], function (_, Marionette, tpl) {

  return Marionette.ItemView.extend({

    id: 'search-box',
    template: {
      type: 'handlebars',
      template: tpl
    },

    ui: {
      input: '#search-box-input'
    },

    events: {
      'keyup @ui.input': '_onInputChanged'
    },

    _onInputChanged: function(e){

      this.term = e.target.value;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(_.bind(this.emitSearchValueChanged, this), 500);

    },

    emitSearchValueChanged: function(){
      this.trigger('search:value:changed', this.term);
    }

  });
});