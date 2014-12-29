/**
 * Created by andre (http://korve.github.io/) on 28.12.2014
 */

angular.module('one80ioApi', ['ngResource'])
	// TODO replace with real domain
	.value('one80ioApiHost', 'http://localhost:9010')
	.value('one80ioApiClientId', 'official')
	.value('one80ioApiClientSecret', 'Vtz5USZekdTt9Jul')
	.run(['$http', 'one80ioApiClientId', 'one80ioApiClientSecret', function ($http, one80ioApiClientId, one80ioApiClientSecret) {
		$http.defaults.headers.common.Authorization = 'Basic ' + btoa(one80ioApiClientId + ':' + one80ioApiClientSecret);
	}])
	.factory('User', ['$resource', 'one80ioApiHost', function ($resource, one80ioApiHost) {
		return $resource(one80ioApiHost + '/user/:handle', {}, {
			login: {
				method: 'POST',
				url: one80ioApiHost + '/token',
				transformRequest: function (data) {
					data.grant_type = 'password';
					return angular.toJson(data);
				}
			}
		});
	}]);
	//.factory('one80ioApi', ['$http', '$q', 'one80ioApiHost', function ($http, $q, one80ioApiHost) {
	//
	//	var restify = '/';
	//
	//	return {
	//		signIn: function (username, password) {
	//			return $q(function (resolve, reject) {
	//				$http.post(one80ioApiHost + '/token', {
	//					grant_type: 'password',
	//					username: username,
	//					password: password
	//				})
	//					.success(function (data, status, headers, config) {
	//						resolve(data);
	//					})
	//					.error(function (data, status, headers, config) {
	//						reject(status);
	//					});
	//			});
	//		}
	//	};
	//}]);
