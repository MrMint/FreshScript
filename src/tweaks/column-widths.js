import storage from '../storage';
import $ from 'jquery';

function setColumnMode(wide) {
	$('#ghx-pool').toggleClass('wide', wide);
	$('#ghx-column-header-group').width($('.ghx-columns').width());
	storage.set('wideColumns', wide);
}

$('<button></button>')
	.addClass('aui-button')
	.text('Toggle Column Width')
	.css('margin-left', 10)
	.click(function() {
		setColumnMode(!$('#ghx-pool').hasClass('wide'));
	})
	.prependTo('#ghx-modes-tools');

if (storage.get('wideColumns')) {
	setColumnMode(true);
}
