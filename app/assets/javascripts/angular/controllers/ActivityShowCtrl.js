this.activity.controller('ActivityShowCtrl', [
  '$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    return $http.get("./activities/" + $routeParams.id + ".json").success(function(data) {
      return $scope.activity = data;
    });
  }
]);






