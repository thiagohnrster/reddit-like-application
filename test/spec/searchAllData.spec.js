describe('searchAllData', function () {
	var arrayData = [
		{ 
			firstName: 'John', 
			lastName: 'Doe',
			age: '32' 
		}
	];

	it('Should search for an item inside the array with right properties', function () {
		var searchString = { firstName: 'John' };
		
		expect(arrayData).toContain(jasmine.objectContaining(searchString));
	});

	it('Should return a value found inside the array', function () {
		var searchString = { firstName: 'John' };
		
		if (expect(arrayData).toContain(jasmine.objectContaining(searchString))) {
			return searchString;
		}
	});
});