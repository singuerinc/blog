require.config({

  baseUrl: 'js',

  urlArgs: "r=" + Math.random(),

  paths: {
    'backbone': '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone',
    'underscore': '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore',
    'jquery': '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery',
    'modernizr': 'vendor/modernizr.custom.32874',
    'backbone.marionette': '//cdnjs.cloudflare.com/ajax/libs/backbone.marionette/2.0.3/backbone.marionette',
    'text': '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text',
    'less': 'vendor/less',
    'dat.gui': 'vendor/dat.gui.min'
  },

  deps: [ 'modernizr', 'less!../styles', 'dat.gui' ],

  map: {
    '*': {
      'less': 'vendor/less'
    }
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
    'dat.gui': {
      'exports': 'dat.gui'
    }

  }
});

require(['app'], function (app) {

  yepnope.injectCss('//fonts.googleapis.com/css?family=Open+Sans:300,600,700', function () {

      app.start();

  });

});