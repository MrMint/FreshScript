import $ from 'jquery';

$('#ghx-work').on('click', '.ghx-key a', function() {
	window.open(this.href);
	return false;
});