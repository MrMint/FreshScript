import $ from 'jquery';

let $section = null;

export function addMenuItem(text) {
	// Create section if it doesn't exist yet
	if ($section == null) {
		let $list = $('#ghx-view-pluggable .aui-list');
		$list.find('ul.aui-last').removeClass('aui-last');
		$section = $('<ul></ul>')
			.addClass('aui-list-section aui-last')
			.appendTo($list);
	}
	// Add menu item
	let $item = $('<li></li>').addClass('aui-list-item').appendTo($section);
	return $('<a></a>').addClass('aui-list-item-link')
		.attr('href', '#').text(text).appendTo($item);
}
