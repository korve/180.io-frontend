/**
 * Created by andre (http://korve.github.io/) on 28.12.2014
 */

angular.module('one80io', ['LocalStorageModule', 'one80ioRoutes', 'one80ioApi'])
	.config(['localStorageServiceProvider', function(localStorageServiceProvider) {
		localStorageServiceProvider.setPrefix('one80io');
	}])
	.run(['$http', '$rootScope', 'localStorageService', function ($http, $rootScope, localStorageService) {
		if(localStorageService.isSupported && localStorageService.get('accessToken'))
		{
			// TODO Only send to API
			$http.defaults.headers.common.Authorization =
				localStorageService.get('accessTokenType') + ' ' + localStorageService.get('accessToken');

			$rootScope.user = localStorageService.get('user');
			console.log($rootScope.user);
		}
	}]);