this.activity.controller('ActivityShowCtrl', [
  '$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    return $http.get("./activities/" + $routeParams.id + ".json").success(function(data) {
      return $scope.activity = data;
    });
  }
]);

this.activity.config([
  "$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);