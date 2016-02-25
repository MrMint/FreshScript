var down;
var downX, downY;
var initialWidth = 400;
var detailView = $("#ghx-detail-view")[0];
var width;

function showSizer() {
  var element = $("#js-sizer")[0];
  if (!element) {
    setTimeout(showSizer, 100);
  } else {
    var clone = element.cloneNode();
    clone.style.display = "block";

    while (element.firstChild) {
      clone.appendChild(element.lastChild);
    }

    element.parentNode.replaceChild(clone, element);

    $(clone).on('mousedown', function(e) {
        initialWidth = detailView.offsetWidth;
        downX = e.pageX;
        downY = e.pageY;
        down = true;
        return false;
    });
  }
}

showSizer();

$('#ghx-pool').each((index, issue) => {
  $(issue).click((event) => {
    setTimeout(showSizer, 300);
  });
});

$(window).on('mouseup', function() {
  if(down) {
    initialWidth = width;
  }
	down = false;
}).on('mousemove', function(e) {
	if (down) {
		// get distance travelled since mousedown
		var distX = e.pageX - downX;
    width = initialWidth - distX;
		detailView.style.left = distX + 'px';
		detailView.style.width = width + 'px';
    $('#ghx-column-header-group').width($('.ghx-columns').width());
		return false;
	}
});
