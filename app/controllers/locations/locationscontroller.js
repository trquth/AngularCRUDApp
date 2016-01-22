app.controller("locationsCtrl", function($scope, ngTableParams, locationSvc) {
	$scope.tableParams = new ngTableParams({
		total: 1,
		page: 1
	}, {
		counts: [],
		getData: function($defer, params) {
			locationSvc.getLocations().$promise.then(function(locations) {
				$defer.resolve(locations)
			})
		}
	});
})