define(['hbs/handlebars'], function (Handlebars) {

  Handlebars.registerHelper('rating', function (rating, options) {

    var out = "";
    var rating = Math.floor(rating / 2);

    for (var i = 0, l = 5; i < l; i++) {
      if (i < rating) {
        out = out + "<span class='star rated'>★</span>";
      } else {
        out = out + "<span class='star'>☆</span>";
      }
    }

    return out;
  });
});