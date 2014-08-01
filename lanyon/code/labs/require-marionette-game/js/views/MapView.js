define(['backbone.marionette', 'backbone', 'models/CellsCollection', 'views/CellView'], function (Marionette, Backbone, CellsCollection, CellView) {
  return Marionette.CollectionView.extend({

    tagName: 'ul',
    className: 'map',
    childView: CellView,
    collection: new CellsCollection(),

    childEvents: {
      'cell:intent': 'onChildIntent'
    },

    model: new Backbone.Model({
      currentCells: [],
      history: [],
      cellsResolved: [],
      movements: 0
    }),

    CONCURRENT_CELLS: 2,
    MAX_MOVEMENTS: 50,

    MAX_TIME_SELECTION: 1500,
    RESTART_TIME: 4000,

    initialize: function(){
      console.log('------------------------------- init');
      soundManager.createSound({ multiShotEvents: true, id: 'beep-audio', url: './audio/21862_beep1.mp3'});
      soundManager.createSound({ multiShotEvents: true, id: 'nice-beep', url: './audio/65057_nicebeep.mp3' });
      soundManager.createSound({ multiShotEvents: true, id: 'cell-resolved', url: './audio/Powerup37.wav' });
    },

    onShow: function () {
      this._restart();
    },

    /**
     * Called when the user clicks on a cell
     * @param childView {CellView}
     */
    onChildIntent: function (childView) {

      // restart if reach max movements
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

          this.trigger('game:cells:match');

          this._resolveCells();
          this.model.set('movements', this.model.get('movements') + (this.CONCURRENT_CELLS * 2));

          if (this.model.get('cellsResolved').length === this.collection.length) {
            this.trigger('game:over');
            setTimeout(this._restart.bind(this), this.MAX_TIME_SELECTION);
          }

        } else {
          setTimeout(this._cleanCells.bind(this), this.MAX_TIME_SELECTION);
          this.$el.addClass('disabled');
        }


      } else {
        this.cleanTimeout = setTimeout(this._cleanCells.bind(this), this.RESTART_TIME);
      }

      this._updateScore();
    },

    _resolveCells: function () {

      soundManager.play('cell-resolved');

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
      _.each(this.model.get('currentCells'), function (el, idx) {
        setTimeout(_.bind(el.model.set, el.model, 'marked', false), 250*idx);
//        el.model.set('marked', false);
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
      // set the map interactive
      this.$el.removeClass('disabled');

      this.model.set('currentCells', []);
      this.trigger('game:new:turn');
    },

    _updateScore: function () {

      var total = this.collection.length / this.CONCURRENT_CELLS;
      var resolved = this.model.get('cellsResolved').length / this.CONCURRENT_CELLS;
      var movements = this.model.get('movements') - this.model.get('history').length;

      this.trigger('game:score:changed', total, resolved, movements);
    },

    restart: function(){
      this._restart();
    },

    _restart: function () {

      this.trigger('game:restart');

      // shuffle collection
      this.collection.sort();

      this.model.set('movements', this.MAX_MOVEMENTS);
      this.model.set('history', []);

      this._cleanCells();
      this.model.set('currentCells', []);

      this._cleanResolved();
      this.model.set('cellsResolved', []);

      this._updateScore();

      this.trigger('game:restarted');
    }

  });
});