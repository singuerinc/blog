define(['backbone'], function (Backbone) {
  return Backbone.Model.extend({

    defaults: {
      resolved: false,
      marked: false,
      css: ""
    }

  });
});