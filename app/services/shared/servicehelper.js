app.factory("serviceHelperSvc", function($http, $resource) {
	var builUrl = function(resourceUrl) {
		var url = "http://localhost:34718" + resourceUrl;
		return url;
	}
	return {
		Location: $resource(builUrl("/api/Locations/:locationId"), {
			locationId: "@id"
		}, {
			"GET": {
				method: "GET",
				isArray: true
			},
			"update": {
				method: "PUT"
			}
		})
	}
})