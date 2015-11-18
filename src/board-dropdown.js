import $ from 'jquery';

let $menu = null;

export function addMenuItem(text) {

	// Create dropdown if it doesn't exist yet
	if ($menu == null) {

		// Create container for dropdown in header
		let $container = $('<div></div>')
			.css({ display: 'inline-block', verticalAlign: 'top', paddingLeft: 10 })
			.prependTo('#ghx-modes-tools');

		// Create menu section
		$menu = $('<ul></ul>')
			.addClass('aui-list-section aui-first aui-last');

		// Add dropdown menu to container
		let $dropdown = $('<div></div>').addClass('ajs-layer box-shadow active').append(
			$('<div></div>').addClass('aui-list').append($menu)
		).appendTo($container).hide();

		// Add button to container
		$('<button>Fresh</button>')
			.addClass('aui-button ghx-dropdown-trigger')
			.click(function() {
				$dropdown.css({
					width: 200,
					position: 'absolute',
					left: $(this).position().left + $(this).outerWidth() - 200,
					top: $(this).position().top + $(this).outerHeight()
				}).toggle();
				$('body').click(); // Close other dropdowns
				return false;
			})
			.appendTo($container);

		// Add active class to menu items on hover
		$dropdown.on('mouseenter mouseout', 'li', function(e) {
			$(this).toggleClass('active', e.type == 'mouseenter');
		});

		// Close dropdown on blur
		$('body').on('click', '*', function() {
			$dropdown.hide();
		});

	}

	// Add menu item
	let $item = $('<li></li>').addClass('aui-list-item').appendTo($menu);
	return $('<a></a>').addClass('aui-list-item-link')
		.attr('href', '#').text(text).appendTo($item);

}