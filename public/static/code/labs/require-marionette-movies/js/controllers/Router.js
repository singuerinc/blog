define(['marionette'], function(Marionette) {

    return Marionette.AppRouter.extend({

      appRoutes: {

        "home": "home",
        "movie/:id": "movie"

      }

    });

  });
