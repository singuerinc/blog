define(['underscore', 'backbone', 'models/CellModel'], function (_, Backbone, CellModel) {

  return Backbone.Collection.extend({

    model: CellModel,

    reset: function(){
      Backbone.Collection.prototype.reset.call(this, this._getCells());
    },

    comparator: function () {
      return Math.random();
    },

    _getCells: function () {

      var styles = [
        "bg-blue", "bg-teal", "bg-green",
        "bg-orange", "bg-red",
        "bg-maroon"
      ];

      var cells = [];

      var randStyles = _.sample(_.shuffle(styles), 6);

      for (var i = 0; i < 6; i++) {
        var style = randStyles.shift();
        for (var j = 0; j < 2; j++) {
          cells.push({
            code: i,
            css: style
          });
        }
      }

      return _.shuffle(cells);
    }

  });
});