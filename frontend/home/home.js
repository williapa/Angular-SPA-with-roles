angular.module( 'sample.home', [
  'ui.router',
  'angular-storage',
  'angular-jwt'
])
.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    controller: 'HomeCtrl',
    templateUrl: 'home/home.html',
    data: {
      requiresLogin: true
    }
  });
})
.controller( 'HomeCtrl', function HomeController( $scope, $http, store, jwtHelper) {

  $scope.jwt = store.get('jwt');
  $scope.decodedJwt = $scope.jwt && jwtHelper.decodeToken($scope.jwt);

  $scope.getMyTasks = function() {
    // Just call the API as you'd do using $http
    callApi('Secured', 'http://localhost:3001/api/protected/mytasks');
  }

  $scope.getAllTasks = function() {
    callApi('Secured', 'http://localhost:3001/api/protected/alltasks');
  }

  function callApi(type, url) {
    $scope.response = null;
    $scope.api = type;
    $http({
      url: url,
      method: 'GET'
    }).then(function(response) {
      console.log(response);
      $scope.response = response.data;
    }, function(error) {
      console.log(error);
      $scope.response = error.data;
    });
  }

});
