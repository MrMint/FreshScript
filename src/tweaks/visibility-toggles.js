import { addMenuItem } from '../board-actions';
import storage from '../storage';
import $ from 'jquery';

function addToggle(key, className, menuItemText, initialToggleVal = true, callback = null) {
	// Set class according to stored value
	let currentVal = storage.get(key);
	if (currentVal || (currentVal == null && !initialToggleVal)) {
		$('body').addClass(className);
		if (callback != null)
			callback();
	}
	// Add menu item to toggle class
	return addMenuItem(menuItemText).click(function() {
		// Toggle stored value
		let val = storage.get(key);
		val = val == null ? initialToggleVal : !val;
		storage.set(key, val);
		// Set class
		$('body').toggleClass(className, val);
		if (callback != null)
			callback();
	});
}

addToggle('hideLeftSidebar', 'hide-left-sidebar', 'Toggle left sidebar', true, function() {
	$('#ghx-column-header-group').width($('.ghx-columns').width());
});

addToggle('hideExtraFields', 'hide-extra-fields', 'Toggle extra fields');
