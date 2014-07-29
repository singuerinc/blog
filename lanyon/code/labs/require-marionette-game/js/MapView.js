define(['backbone.marionette', 'backbone', 'CellView'], function (Marionette, Backbone, CellView) {
  return Marionette.CollectionView.extend({

    tagName: 'ul',
    className: 'map',
    childView: CellView,

    childEvents: {
      'cell:intent': 'onChildIntent'
    },

    model: new Backbone.Model({
      currentCells: [],
      history: [],
      cellsResolved: []
    }),

    CONCURRENT_CELLS: 2,
    MAX_MOVEMENTS: 50,

    onShow: function () {
      this._restart();
    },

    /**
     * Called when the user clicks on a cell
     * @param childView {CellView}
     */
    onChildIntent: function (childView) {

      if (this.model.get('history').length >= this.MAX_MOVEMENTS) {
        this._restart();
        return;
      }

      // don't allow to click more than CONCURRENT_CELLS
      if (this.model.get('currentCells').length >= this.CONCURRENT_CELLS) {
        return;
      }

      // mark the clicked cell
      childView.model.set('marked', true);

      // save all the user interactions
      // later we can replay the game
      this.model.get('history').push(childView);

      // save the current selected cell
      this.model.get('currentCells').push(childView);

      // every time the user clicks on a cell
      // renew the turn timer
      clearTimeout(this.cleanTimeout);

      // TODO: cancel the turn if the fist 2 cells are not equals

      if (this.model.get('currentCells').length === this.CONCURRENT_CELLS) {

        var cells = this.model.get('currentCells');

        // get the first cell code to compare with the other codes
        var code1 = cells[0].model.get('code');

        // get the cells models
        var models = new Backbone.Collection(_.pluck(cells, 'model'));

        // get all the models that has equal codes
        var withTheSameCode = models.where({code: code1});

        // all the codes must be match!
        if (withTheSameCode.length === this.CONCURRENT_CELLS) {
          this._resolveCells();

          if (this.model.get('cellsResolved').length === this.collection.length) {
            setTimeout(this._restart.bind(this), 1500);
          }

        } else {
          setTimeout(this._cleanCells.bind(this), 1500);
        }

      } else {
        this.cleanTimeout = setTimeout(this._cleanCells.bind(this), 4000);
      }

      this._updateScore();
    },

    _resolveCells: function () {

      _.each(this.model.get('currentCells'), function (el) {

        // mark cell as resolved
        el.model.set('resolved', true);

        //save resolved cells
        this.model.get('cellsResolved').push(el);

      }, this);

      this._startNewTurn();
    },

    _cleanCells: function () {

      // deselect the current cells
      _.each(this.model.get('currentCells'), function (el) {
        el.model.set('marked', false);
      }, this);

      this._startNewTurn();
    },

    _cleanResolved: function () {

      // restart to the original style
      // of all resolved cells
      _.each(this.model.get('cellsResolved'), function (el) {
        el.model.set('resolved', false);
        el.model.set('marked', false);
      }, this);

      this._startNewTurn();
    },

    _startNewTurn: function () {
      this.model.set('currentCells', []);
    },

    _updateScore: function () {

      var total = this.collection.length / this.CONCURRENT_CELLS;
      var resolved = this.model.get('cellsResolved').length / this.CONCURRENT_CELLS;
      var movements = this.MAX_MOVEMENTS - this.model.get('history').length;

      this.trigger('score:changed', total, resolved, movements);
    },

    _restart: function () {

      this.model.set('history', []);

      this._cleanCells();
      this.model.set('currentCells', []);

      this._cleanResolved();
      this.model.set('cellsResolved', []);

      this._updateScore();
    }

  });
});