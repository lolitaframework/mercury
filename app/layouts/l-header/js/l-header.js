$b_logo = jQuery('.b-logo.l-header__top-item');
$b_main_menu = jQuery('.b-main-menu.l-header__top-item');
$b_search = jQuery('.b-search.l-header__top-item');

jQuery('body').on('b-main-menu__link--search::click', function() {
	$b_logo.hide();
	$b_main_menu.hide();
	$b_search.show();
});

jQuery('body').on('b-search__close::click', function() {
	$b_logo.show();
	$b_main_menu.show();
	$b_search.hide();
});