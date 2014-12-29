/**
 * Created by andre (http://korve.github.io/) on 28.12.2014
 */

angular.module('one80ioRoutes')
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/signup', {
				templateUrl: 'app/signUpView/signUpView.html'
			});
	}])
	.controller('SignUpController', ['$scope', 'User', function ($scope, User) {
		$scope.name = '';
		$scope.email = '';
		$scope.password = '';

		$scope.signup = function () {
			var user = new User({
				name: $scope.name,
				email: $scope.email,
				password: $scope.password
			});
			user.$save();
		};
	}]);