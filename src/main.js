
// Append transformed less to head (style loader is overkill here)
var style = document.createElement('style');
style.innerText = require('./styles.less');
document.head.appendChild(style);

// Wait for board to exist then load tweaks
jQuery(function check() {
	if (jQuery("#ghx-pool").length) {
		// webpack magic, requires all modules in directory
		var r = require.context('./tweaks', true, /.*/);
		r.keys().forEach(r);
	} else {
		setTimeout(check, 100);
	}
});
