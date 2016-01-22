app.factory('locationSvc', function($resource, serviceHelperSvc) {
	var Location = serviceHelperSvc.Location;
	var getLocations = function() {
		return Location.query();
	}
	return {
		getLocations: getLocations
	}
})