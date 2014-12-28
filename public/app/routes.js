/**
 * Created by andre (http://korve.github.io/) on 28.12.2014
 */

angular.module('180ioRoutes', ['ngRoute'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.otherwise({
			templateUrl: 'app/errors/404.html'
		});
	}]);