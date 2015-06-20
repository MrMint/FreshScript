import $ from 'jquery';

// Append transformed less to head (style loader is overkill here)
let style = document.createElement('style');
style.innerText = require('./styles.less');
document.head.appendChild(style);

// Wait for board to exist then load tweaks
$(function check() {
	if ($('#ghx-pool').length) {
		// webpack magic, requires all modules in directory
		let r = require.context('./tweaks', true, /.*/);
		r.keys().forEach(r);
	} else {
		setTimeout(check, 100);
	}
});
