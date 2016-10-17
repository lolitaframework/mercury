$b_main_menu__link__search = jQuery('.b-main-menu__link--search');

$b_main_menu__link__search.on('click', function() {
	console.log('b-main-menu__link--search::click');
	jQuery('body').trigger('b-main-menu__link--search::click');
});
