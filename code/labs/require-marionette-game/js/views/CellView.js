define(['backbone.marionette', 'underscore'], function (Marionette, _) {
  return Marionette.ItemView.extend({

    tagName: 'li',
    className: 'cell pulse',
    template: _.template(''),

    events: {
      'click': 'onClick'
    },

    modelEvents: {
      'change:resolved': 'onResolvedChanged',
      'change:marked': 'onMarkedChanged'
    },

    onClick: function (e) {

      e.preventDefault();

      if(this.model.get('marked') === true) { return; }
      if(this.$el.parent().hasClass('disabled')) { return; }

      soundManager.play('cell-intent');
      this.trigger('cell:intent');
    },

    onMarkedChanged: function (model, value) {
      this.$el.toggleClass('marked', value);
      this._backgroundColor(value);
      if(!value) soundManager.play('cell-unmarked');
    },

    onResolvedChanged: function (model, value) {
      this.$el.toggleClass('resolved', value);
      this._backgroundColor(value);
    },

    _backgroundColor: function (value) {
      this.$el.toggleClass('asset-type-0', value);
      this.$el.toggleClass(this.model.get('css'), value);
    }
  })
});