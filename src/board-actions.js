import $ from 'jquery';

let $group;
let $menu;

function init() {

	// Create button group with dropdown if it doesn't exist yet
	if ($group == null) {

		// Add button group to header
		$group = $('<div></div>')
			.addClass('fresh-board-actions')
			.prependTo('#ghx-modes-tools');

		// Create menu section
		$menu = $('<ul></ul>')
			.addClass('aui-list-section aui-first aui-last');

		// Add dropdown menu to group
		let $dropdown = $('<div></div>').addClass('ajs-layer box-shadow').append(
			$('<div></div>').addClass('aui-list').append($menu)
		).appendTo($group).hide();

		// Add button to group, before menu
		let $dropdownButton = $('<button>Fresh</button>')
			.addClass('aui-button ghx-dropdown-trigger')
			.click(function() {
				$dropdown.toggle();
				$(this).toggleClass('active');
				$('body').click(); // Close other dropdowns
				return false;
			})
			.insertBefore($dropdown);

		// Add active class to menu items on hover
		$dropdown.on('mouseenter mouseout', 'li', function(e) {
			$(this).toggleClass('active', e.type == 'mouseenter');
		});

		// Close dropdown on blur
		$('body').on('click', '*', function() {
			$dropdown.hide();
			$dropdownButton.removeClass('active');
		});

	}

}

export function addMenuItem(text) {
	init();
	let $item = $('<li></li>').addClass('aui-list-item').appendTo($menu);
	return $('<a></a>').addClass('aui-list-item-link')
		.attr('href', '#').text(text).appendTo($item);
}

export function addButton(text) {
	init();
	return $('<button></button>').addClass('aui-button')
		.text(text).prependTo($group);
}
