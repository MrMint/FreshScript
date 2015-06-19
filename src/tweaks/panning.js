var $ = require('jquery');

$.getScript("https://hammerjs.github.io/dist/hammer.min.js", function() {
	// Hammer time
	var myElement = document.getElementById('ghx-pool');
	var mc = new Hammer(myElement);
	mc.get('pan').set({
		direction: Hammer.DIRECTION_ALL
	});

	var initialHorizScrollPosition = $('#ghx-pool').scrollLeft();
	var initialVertScrollPosition = $('#ghx-pool').scrollTop();
	var panning = false;
	mc.on("panleft panright panend panstart panup pandown", function(ev) {
		switch (ev.type) {
			case "panstart":
				if ($(ev.target).closest('.ghx-issue').length == 0) {
					panning = true;
				}
				break;
			case "panend":
				panning = false;
				initialHorizScrollPosition = $('#ghx-pool').scrollLeft();
				initialVertScrollPosition = $('#ghx-pool').scrollTop();
				break;
			case "panleft":
			case "panright":
				if(panning)
				{
					$('#ghx-pool').scrollLeft(initialHorizScrollPosition - ev.deltaX);
				}
				break;
			case "panup":
			case "pandown":
				if(panning)
				{
					$('#ghx-pool').scrollTop(initialVertScrollPosition - ev.deltaY);
				}
				break;
			default:
				break;
		}
	});
});