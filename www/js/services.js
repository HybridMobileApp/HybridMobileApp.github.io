angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
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


.factory('itunes', function( $http ) {
  var list = [];



 return {
    query: function(){

      $http.get("https://itunes.apple.com/lookup?id=211192863&entity=song&sort=popular").then(function (result) {
                    
                           // console.log(JSON.stringify(result));
                           console.log(result.results);
                            list = result.results
                           

                        }, function (result) {
                          
                            console.log(JSON.stringify(result));
                        })

    },
    all: function() {
      return list;
    },
    get: function() {
     
    }
  }
})