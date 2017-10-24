define(['backbone'], function (Backbone) {

  return Backbone.Model.extend({
    defaults: {
      id: "",
      link: "",
      name: "",
      username: "",
      picture: {
        data: {
          url: ""
        }
      }
    }
  });
});