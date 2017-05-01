describe('getJSON request', function () {
	it('Should make a getJSON call', function () {
		spyOn($, 'getJSON').and.callFake(function (url, success) {
			success({
				'isOK': true
			});
			return {
				fail: function() {}
			}
		});

		query.getJSONRequest();
		expect(query.queryResult).toBe(true);
	});
});