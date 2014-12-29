/**
 * Created by andre (http://korve.github.io/) on 28.12.2014
 */

angular.module('one80ioRoutes')
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/signin', {
				templateUrl: 'app/signInView/signInView.html'
			});
	}])
	.controller('SignInController', ['$scope', 'User', function ($scope, User) {
		$scope.email = '';
		$scope.password = '';

		$scope.signin = function () {
			var user = User.login({ username: $scope.email, password: $scope.password }, function (res) {
				// TODO add successful login handler
			}, function (err) {
				if(err.status === 401)
					$scope.error = 'Invalid login. Please check your login credentials.';
				else
					$scope.error = 'An error occurred while logging in.';
			});
		};
	}]);