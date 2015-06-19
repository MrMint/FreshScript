var $ = require('jquery');

$("#ghx-controls-work").on("click", "#js-work-quickfilters a.js-quickfilter-button.ghx-active", function(e, ignore) {
	if (!e.ctrlKey && !ignore) {
		$("#js-work-quickfilters a.js-quickfilter-button.ghx-active").not(this).trigger("click", [ true ]);
	}
});