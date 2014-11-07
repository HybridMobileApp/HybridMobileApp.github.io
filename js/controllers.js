angular.module('starter.controllers', [])
.config(['$httpProvider', function($httpProvider) {
     $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

}]) 
.controller('DashCtrl', function($scope , itunes) {
itunes.query("hip-hop");

$scope.doSearch = function (term){
    //alert("search");
	itunes.query(term);
}

$scope.$on('data:updated', function(event,data) {
     // you could inspect the data to see if what you care about changed, or just update your own scope
     $scope.items = itunes.all();
   });

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})
.controller('cricketCtrl', function($scope, $stateParams ,cricket) {
	cricket.query();
	$scope.$on('match:updated', function(event,data) {
     // you could inspect the data to see if what you care about changed, or just update your own scope
     $scope.items = cricket.all();
   });
 
})
.controller('AccountCtrl', function($scope) {
});
