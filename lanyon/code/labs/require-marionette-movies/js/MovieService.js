define(['underscore', 'marionette'], function (_, Marionette) {
    return Marionette.Controller.extend({

        initialize: function () {

            $.ajax({
                type: 'GET',
                url: "http://api.themoviedb.org/3/configuration",
                async: false,
                jsonpCallback: 'test',
                contentType: 'application/json',
                dataType: 'jsonp',
                data: {
                    'api_key': 'cb5f886745e3ea2dd5975da09b7194ce'
                },
                success: function (data) {
                    this.configuration = data;
                    this.trigger('init');
                },
                context: this
            });

        },

        searchMovie: function (value, callback) {
            if (!!value) {
                $.ajax({
                    type: 'GET',
                    url: "http://api.themoviedb.org/3/search/movie",
                    async: false,
                    jsonpCallback: 'test',
                    contentType: 'application/json',
                    dataType: 'jsonp',
                    data: {
                        'query': value,
                        'api_key': 'cb5f886745e3ea2dd5975da09b7194ce',
                        'include_image_language': 'en'
                    },
                    success: function (data) {
                        console.log(data);
                        var images = this.configuration.images;
                        var baseUrl = images.base_url + images.poster_sizes[3];
                        _.each(data.results, function (item, i, arr) {
                            if(item.backdrop_path){
                                item.backdrop_path = baseUrl + item.backdrop_path;
                            }
                            if(item.poster_path){
                                item.poster_path = baseUrl + item.poster_path;
                            }
                            console.log(item);
                        }, this);

                        data.results = _.sortBy(data.results, 'popularity').reverse();

                        callback(data.results);
                    },
                    context: this
                });

            } else {
                callback([]);
            }

        }

    });
});