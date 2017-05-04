describe('DOM tests', function () {
	describe('Button click event tests', function () {
		var spyEvent;

		beforeEach(function () {
			setUpHTMLFixture();
		});

		it('Should invoke the btnShowMessage click event', function () {
			spyEvent = spyOnEvent('#btnShowMessage', 'click');

			$('#btnShowMessage').trigger('click');

			expect('click').toHaveBeenTriggeredOn('#btnShowMessage');
			expect(spyEvent).toHaveBeenTriggered();
		});

		it('Should invoke the btnHideMessage click event', function () {
			spyEvent = spyOnEvent('#btnHideMessage', 'click');

			$('#btnHideMessage').trigger('click');

			expect('click').toHaveBeenTriggeredOn('#btnHideMessage');
			expect(spyEvent).toHaveBeenTriggered();
		});
	});

	describe('Show message tests', function () {
		beforeEach(function () {
			setUpHTMLFixture();

			$('#txtMessage').val(msg);
			$('#btnShowMessage').trigger('click');
		});

		it('Should display the message when button is clicked', function () {
			expect($('#msg')).toHaveText($('#txtMessage').val());
		});
	});

	describe('Hide message tests', function () {
		beforeEach(function () {
			setUpHTMLFixture();

			$('#txtMessage').val(msg);
			$('#btnHideMessage').trigger('click');
		});

		it('Should remove the message when button is clicked', function () {
			expect($('#msg')).toHaveText('');
		});
	});
});