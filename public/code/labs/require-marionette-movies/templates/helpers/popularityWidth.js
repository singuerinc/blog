define(['hbs/handlebars'], function (Handlebars) {

  Handlebars.registerHelper('popularityWidth', function (popularity, options) {

    return "width:" + Math.floor(Math.min(1, popularity) * 98) + "px;"

  });
});