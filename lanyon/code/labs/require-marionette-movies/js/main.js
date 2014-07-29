require.config({

    baseUrl: 'js',

    hbs: {
        disableI18n: true,
        disableHelpers: false
    },

    paths: {
        'views': '../views',
        'hbs/handlebars': 'vendor/hbs/handlebars',
        'hbs/i18nprecompile': 'vendor/hbs/i18nprecompile',
        'hbs/json2': 'vendor/hbs/json2',
        'hbs': 'vendor/hbs',
        'modernizr': 'vendor/modernizr.custom.32874',
        'backbone': '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
        'underscore': '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min',
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min',
        'marionette': '//cdnjs.cloudflare.com/ajax/libs/backbone.marionette/2.0.3/backbone.marionette.min',
        'backbone.marionette.handlebars': 'vendor/backbone.marionette.handlebars.min',
        'isotope': '//isotope.metafizzy.co/isotope.pkgd.min',
        'nprogress': '//cdnjs.cloudflare.com/ajax/libs/nprogress/0.1.3/nprogress.min'
    },

    deps: [ "backbone.marionette.handlebars", 'modernizr' ],

    map: {
      '*': {
        'backbone.marionette': 'marionette'
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
        'facebook': {
            'exports': 'FB'
        },
        'backbone.marionette': {
          'deps': ['marionette']
        }
    }
});

require(['app'], function (app) {

    yepnope.injectCss('//fonts.googleapis.com/css?family=Roboto:300', function () {
        yepnope.injectCss('./style.css', function () {
            yepnope.injectCss('//cdnjs.cloudflare.com/ajax/libs/nprogress/0.1.3/nprogress.css', function () {
                app.start();
            });
        });
    });


});