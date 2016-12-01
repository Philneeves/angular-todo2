angular.module('RouteControllers', [])
	.controller('HomeController', function($scope) {
		$scope.title = "Welcome to Angular Todo2!";
	})
	.controller('RegisterController', function($scope) {

		$scope.registrationUser = {};

		$scope.submitForm = function() {
			if ($scope.registrationForm.$valid) {
				$scope.registrationUser.username = $scope.user.username;
				$scope.registrationUser.password = $scope.user.password;
			}

			alert("Hello" + " " + $scope.registrationUser.username + " " + "welcome to your Todo Task Manager!");
			console.log($scope.registrationUser.username + " " + $scope.registrationUser.password);
		}
	});