var app = angular.module("CRUDApp", ["ngRoute", "ngTable", "ngResource"]);
app.config(function($routeProvider, $locationProvider, $httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
	$httpProvider.defaults.useXDomain = true;
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	$routeProvider
		.when("/", {
			templateUrl: "/app/views/locations/Locations.html",
			controller: "locationsCtrl"
		})
		.otherwise({
			redirectTo: "/"
		});
});