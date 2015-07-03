import $ from 'jquery';

const THRESHOLD = 25; // Distance from either axis before movement in that direction is allowed
const ENABLE_HORIZ_LOCK = true; // Allow locking to x axis
const ENABLE_VERT_LOCK = false; // Allow locking to y axis

let el = $('#ghx-pool')[0];

let down;
let downX, downY;
let initialScrollX, initialScrollY;
let lockX, lockY;

$(el).on('mousedown', function(e) {
	if (!$(e.target).closest('.ghx-issue').length) {
		downX = e.pageX;
		downY = e.pageY;
		initialScrollX = el.scrollLeft;
		initialScrollY = el.scrollTop;
		lockX = ENABLE_VERT_LOCK; // Vert lock = no x movement
		lockY = ENABLE_HORIZ_LOCK; // Horiz lock = no y movement
		down = true;
		return false;
	}
});

$(window).on('mouseup', function() {
	down = false;
}).on('mousemove', function(e) {
	if (down) {
		// Get distance travelled since mousedown
		let distX = e.pageX - downX;
		let distY = e.pageY - downY;
		// Check if we've crossed threshold in either direction
		lockX = lockX && Math.abs(distX) < THRESHOLD;
		lockY = lockY && Math.abs(distY) < THRESHOLD;
		// Restrict movement in locked directions unless still in center region
		if (lockX && !lockY) distX = 0;
		if (lockY && !lockX) distY = 0;
		// Adjust scroll position
		el.scrollLeft = initialScrollX - distX;
		el.scrollTop = initialScrollY - distY;
		return false;
	}
});
