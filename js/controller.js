angular.module('RouteControllers', [])
	.controller('HomeController', function($scope) {
		$scope.title = "Welcome to Todo2 by Philip"
	})

	.controller('RegisterController', function($scope, UserAPIService, store) {
		$scope.registrationUser = {};
	var URL = "https://morning-castle-91468.herokuapp.com/";

	$scope.login = function() {
		UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results) {
			$scope.token = results.data.token;
			store.set('username', $scope.registrationUser.username);
			store.set('authToken', $scope.token);
		}).catch(function(err) {
			console.log(err.data);
		});
	}

		$scope.submitForm = function() {
			if ($scope.registrationForm.$valid) {
				$scope.registrationUser.username = $scope.user.username;
				$scope.registrationUser.password = $scope.user.password;

				UserAPIService.callAPI(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
					$scope.data = results.data;
					alert("You have successfully registered to Angular Todo2");
					alert("Hello" + " " + $scope.registrationUser.username + "!" + " " + "Welcome to your Todo2 Task Manager!");
					console.log($scope.registrationUser.username + " " + $scope.registrationUser.password);
					$scope.login();
				}).catch(function(err) {
					alert("Oops! Something went wrong!  You have already registered");
					console.log(err);
				});
			}
		};
	});