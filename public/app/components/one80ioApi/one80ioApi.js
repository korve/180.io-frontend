/**
 * Created by andre (http://korve.github.io/) on 28.12.2014
 */

angular.module('one80ioApi', ['ngResource'])
	// TODO replace with real domain
	.value('one80ioApiHost', 'http://localhost:9010')
	.value('one80ioApiClientId', 'official')
	.value('one80ioApiClientSecret', 'Vtz5USZekdTt9Jul')
	.factory('User', ['$resource', 'one80ioApiHost', 'one80ioApiClientId', 'one80ioApiClientSecret', function ($resource, one80ioApiHost, one80ioApiClientId, one80ioApiClientSecret) {
		return $resource(one80ioApiHost + '/user/:handle', {}, {
			login: {
				method: 'POST',
				url: one80ioApiHost + '/token',
				headers: {
					Authorization: 'Basic ' + btoa(one80ioApiClientId + ':' + one80ioApiClientSecret)
				},
				transformRequest: function (data) {
					data.grant_type = 'password';
					return angular.toJson(data);
				}
			}
		});
	}]);