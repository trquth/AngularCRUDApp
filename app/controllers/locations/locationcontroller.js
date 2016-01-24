app.controller("locationCtrl", function($scope, $location, $routeParams, locationSvc) {
	$scope.id = $routeParams.locationId;
	locationSvc.getLocation($scope.id).$promise.then(function(result) {
		$scope.detail = result;
	}, function() {
		$scope.detail = "fail";
	});
	$scope.editLocation = function(location) {
		locationSvc.editLocation(location).$promise.then(function(data) {
			$location.url("/");
		});

	}
	$scope.addLocation = function(location) {
		locationSvc.addLocation(location).$promise.then(function(data) {
			$location.url("/");
		});

	}
	var init = function() {
		if ($routeParams.locationId > 0) {
			$scope.location = locationSvc.getLocation($routeParams.locationId);
		}
	}
	init();

})