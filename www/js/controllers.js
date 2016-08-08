angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state, $ionicViewService) {
  $scope.signIn = function(user)
  {
    console.log('Sign in');

    $ionicViewService.nextViewOptions({
      disableAnimate: true,
      disableBack: true
    });    

    $state.go('app.home');
  }
})
.controller('AppCtrl', function($scope) {
});