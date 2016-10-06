$b_search__close = jQuery('.b-search__close');
$b_search__close.on('click', 
	function() {
		jQuery('body').trigger('b-search__close::click');
	}
);
