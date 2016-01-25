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
			templateUrl: "/app/views/locations/locations.html",
			controller: "locationsCtrl"
		})
		.when("/Locations/Detail/:locationId", {
			templateUrl: "/app/views/locations/detail.html",
			controller: "locationCtrl"
		})
		.when("/Locations/Edit/:locationId", {
			templateUrl: "/app/views/locations/edit_1.html",
			controller: "locationCtrl"
		})
		.when("/Locations/Add", {
			templateUrl: "/app/views/locations/add_.html",
			controller: "locationCtrl"
		})
		.otherwise({
			redirectTo: "/"
		});
});