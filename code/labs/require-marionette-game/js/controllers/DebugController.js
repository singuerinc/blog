define(['backbone.marionette'],

  function (Marionette) {

    return Marionette.Controller.extend({

      initialize: function(){

        var gui = new dat.gui.GUI();
        var f1 = gui.addFolder('map');
        f1.add(this.options.map, 'restart');
        f1.add(this.options.map, 'CONCURRENT_CELLS').min(2).max(5).step(1);
        f1.add(this.options.map, 'MAX_MOVEMENTS').min(1).max(150).step(1);
        f1.add(this.options.map, 'MAX_TIME_BETWEEN_SELECTION').min(100).max(60 * 1000).step(100);
        f1.add(this.options.map, 'RESTART_TIME').min(100).max(10000).step(500);
        f1.open();


      }

    });

  });
