app.factory('locationSvc', function($resource, serviceHelperSvc) {
	var Location = serviceHelperSvc.Location;
	var getLocations = function() {
		return Location.query();
	}
	var getLocation = function(id) {
		return Location.get({
			locationId: id
		});
	}
	var editLocation = function(location) {
		var updation = Location.update(location);
		return updation;
	}
	var addLocation = function(location) {
		return Location.save(location);
	}
	return {
		getLocations: getLocations,
		getLocation: getLocation,
		editLocation: editLocation,
		addLocation: addLocation
	}
})