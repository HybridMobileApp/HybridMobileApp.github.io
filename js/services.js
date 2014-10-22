angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Cordova' },
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Bootstrap' },
    { id: 3, name: 'Ionic' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})


.factory('itunes', function( $http , $rootScope ) {
  var list = [];


var term = "hipHop";
 return {
    query: function(search){
              term = search;
               $http.jsonp("http://itunes.apple.com/search", {
                  params: {
                      "callback": "JSON_CALLBACK",
                      "term": term,
                      "media": "musicVideo"
                  }
              }).success(function(data, status, headers, config) {
                  console.log("is scope : " + JSON.stringify (data) );
                  list = data.results;
                  $rootScope.$broadcast('data:updated',data);
              }).error(function(data, status, headers, config) {
                  console.log("error" + data);
              });

    },
    all: function() {
      return list;
    },
    get: function() {
     
    }
  }
})