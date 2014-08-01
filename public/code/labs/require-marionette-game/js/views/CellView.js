define(['backbone.marionette', 'underscore'], function (Marionette, _) {
  return Marionette.ItemView.extend({

    tagName: 'li',
    className: 'cell pulse',
    template: _.template('<span><%= code %></span>'),

    events: {
      'click': 'onClick'
    },

    modelEvents: {
      'change:resolved': 'onResolvedChanged',
      'change:marked': 'onMarkedChanged'
    },

//    onRender: function(){
//      this._backgroundColor(true);
//    },

    onClick: function (e) {

      e.preventDefault();

      // fixme: tal vez mejor mirar una variable en el modelo map
      if(this.$el.parent().hasClass('disabled')) { return; }

      soundManager.play('beep-audio');
      this.trigger('cell:intent');
    },

    onMarkedChanged: function (model, value) {
      this.$el.toggleClass('marked', value);
      this._backgroundColor(value);
      if(!value) soundManager.play('nice-beep');
    },

    onResolvedChanged: function (model, value) {
      this.$el.toggleClass('resolved', value);
      this._backgroundColor(value);
    },

    _backgroundColor: function (value) {
      this.$el.toggleClass(this.model.get('css'), value);
    }
  })
});