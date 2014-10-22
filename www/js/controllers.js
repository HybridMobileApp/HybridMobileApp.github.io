angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope , itunes) {
itunes.query();
$scope.items = itunes.all();
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
