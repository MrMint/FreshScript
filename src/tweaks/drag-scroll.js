import $ from 'jquery';

let lastX;
let lastY;
let down = false;

$('#ghx-pool').on('mousedown', function(e) {
	if (!$(e.target).closest('.ghx-issue').length) {
		lastX = e.pageX;
		lastY = e.pageY;
		down = true;
		return false;
	}
});

$(window).on('mouseup', function() {
	down = false;
}).on('mousemove', function(e) {
	if (down) {
		let el = $('#ghx-pool')[0];
		el.scrollLeft -= e.pageX - lastX;
		el.scrollTop -= e.pageY - lastY;
		lastX = e.pageX;
		lastY = e.pageY;
		return false;
	}
});