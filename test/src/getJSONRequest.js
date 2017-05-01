var query = {
	getJSONRequest: function () {
		'use strict';

		$.getJSON(query.url, function (simpleJson) {
			console.log(simpleJson);
			query.queryResult = simpleJson[Object.keys(simpleJson)[0]];
		}).fail(function (error) {
			console.log(error.statusText);
		});
	}
}