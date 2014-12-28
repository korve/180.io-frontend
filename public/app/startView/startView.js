/**
 * Created by andre (http://korve.github.io/) on 28.12.2014
 */

angular.module('180ioRoutes')
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'app/startView/startView.html'
		});
	}]);