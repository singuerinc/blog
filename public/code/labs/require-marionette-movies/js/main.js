require.config({

  baseUrl: 'js',

  paths: {
    'backbone':     '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
    'underscore':   '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min',
    'jquery':       '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min',
    'marionette':   '//cdnjs.cloudflare.com/ajax/libs/backbone.marionette/2.0.3/backbone.marionette.min',
    'isotope':      '//isotope.metafizzy.co/isotope.pkgd.min'
  },

  shim: {
    'jquery': {
      'exports': 'jQuery'
    },
    'underscore': {
      'exports': '_'
    },
    'backbone': {
      'deps': ['jquery', 'underscore'],
      'exports': 'Backbone'
    },
    'marionette': {
      'deps': ['backbone'],
      'exports': 'Marionette'
    },
    'facebook' : {
      'exports': 'FB'
    }
  }
});

require(['app'], function(app) {

  app.start();

});