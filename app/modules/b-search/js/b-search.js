$b_search__close = jQuery('.b-search__close');
$b_search__close.on('click', 
	function() {
		console.log('b-search__close::click');
		jQuery('body').trigger('b-search__close::click');
	}
);
