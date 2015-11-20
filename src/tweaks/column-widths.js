import { addButton } from '../board-actions';
import storage from '../storage';
import $ from 'jquery';

function setColumnMode(wide) {
	$('#ghx-pool').toggleClass('wide', wide);
	$('#ghx-column-header-group').width($('.ghx-columns').width());
	storage.set('wideColumns', wide);
}

addButton('Toggle Column Width').click(function() {
	setColumnMode(!$('#ghx-pool').hasClass('wide'));
});

if (storage.get('wideColumns')) {
	setColumnMode(true);
}
