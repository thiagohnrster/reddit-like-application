var msg = 'Hello World!';

function hideMessage() {
	$('#msg').html('');
}

function showMessage() {
	$('#msg').html(msg);
}

function setUpHTMLFixture() {
	setFixtures('<form id="testForm" action="" method="POST">' +
							'	<h1>Test Form</h1>' +
							'	<input type="text" name="txtMessage" id="txtMessage" />' +
							'	<br />' +
							'	<button type="button" id="btnHideMessage" onclick="hideMessage()"></button>' +
							'	<button type="button" id="btnShowMessage" onclick="showMessage()"></button>' +
							'	<br />' +
							'	<p id="msg"></p>' +
							'</form>');
}