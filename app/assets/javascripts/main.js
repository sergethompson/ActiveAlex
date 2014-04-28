
// # This line is related to our Angular app, not to our
// # HomeCtrl specifically. This is basically how we tell
// # Angular about the existence of our application.

this.activity = angular.module('activity', ['ui.bootstrap']);


//angular.module('mean').config(

// # This routing directive tells Angular about the default
// # route for our application. The term "otherwise" here
// # might seem somewhat awkward, but it will make more
// # sense as we add more routes to our application.
this.activity.config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.
    when('/activities', {
      templateUrl: '../templates/activities/index.html',
      controller: 'ActivityIndexCtrl'
    }).
    when('/activities/:id', {
      templateUrl: '../templates/activities/show.html',
      controller: 'ActivityShowCtrl'
    }).
    otherwise({
      templateUrl: '../templates/home.html',
      controller: 'HomeCtrl'
    });
  }
]);

this.activity.config([
  "$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);
