/**
 * Created by andre (http://korve.github.io/) on 28.12.2014
 */

angular.module('one80ioRoutes')
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/signup', {
				templateUrl: 'app/signUpView/signUpView.html'
			});
		$routeProvider
			.when('/signed-up', {
				templateUrl: 'app/signUpView/signUpSuccessView.html'
			});
	}])
	.controller('SignUpController', ['$scope', '$location', 'localStorageService', 'User', function ($scope, $location, localStorageService, User) {
		$scope.user = new User();
		$scope.errors = {};

		$scope.signup = function () {
			var creds = { username: $scope.user.email, password: $scope.user.password };
			$scope.user.$save({},
				function success() {
					// sign in
					User.login(creds, function (res) {
						localStorageService.set('accessToken', res.access_token);
						localStorageService.set('accessTokenType', res.token_type);
						localStorageService.set('accessTokenExpires', res.expires_in);

						var user = User.get();
						localStorageService.set('user', {
							name: user.name,
							handle: user.handle
						});
						console.log(user);
					})
				},
				function error(err) {
					if(err.data.code === 'ValidationError' && err.data.errors)
						$scope.errors = err.data.errors;
				}
			);
		};
	}]);