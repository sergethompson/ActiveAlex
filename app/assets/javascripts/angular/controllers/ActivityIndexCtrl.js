this.activity.controller('ActivityIndexCtrl', [
	'$scope', '$location', '$http', function($scope, $location, $http) {
		var goingIn;
		$scope.activities = [];
		$scope.viewActivity = function(id) {
			console.log("clicked")
			return $location.url("/activities/" + id);
		};


					$scope.create = function(){
			console.log("clicked")
			console.log( this.title+ this.content+ this.level+this.location+ this.time)
			goingIn = {
				activity: {
					title: this.title,
					content: this.content,
					level: this.level,
					location: this.location,
					time: this.time
				}
			};
			console.log("clicked2")

			$http.post('./activities', goingIn).success(function(data) {
				$scope.activities.push(data);
			});
		};


		return $http.get('./activities.json').success(function(data) {
			return $scope.activities = data;
		});





	}
	]);
