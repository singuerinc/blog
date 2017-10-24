define(
  [
    'marionette',
    'backbone',
    'facebook',
    'UserView',
    'SearchView',
    'UserModel'
  ],

  function (Marionette, Backbone, FB, UserView, SearchView, UserModel) {

    var app = new Marionette.Application();

    app.addRegions({
      search: '#search',
      result: '#result'
    });

    app.addInitializer(function () {

      var user,
          searchBox,
          resultView;

      user = new UserModel();

      resultView = new UserView({ model: user });
      searchBox = new SearchView({ model: user });

      searchBox.on('search:value:changed', function(value) {
        FB.api('/' + value, {fields: 'id,link,name,username,picture', access_token: '1774104969502286|l84EQCDdb6LBBIdGkJ3vUftpF0E'}, function(result){
          if(!!result && !result.error){
            user.set(result);
          } else {
            user.clear({silent: true}).set(user.defaults);
          }
        });

      });

      app.search.show(searchBox);
      app.result.show(resultView);

    });

    return app;

  });
