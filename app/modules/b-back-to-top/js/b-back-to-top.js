$b_back_to_top = jQuery('.b-back-to-top');
scrollTrigger = 100;

back_to_top = function() {
	if (jQuery(window).scrollTop() > scrollTrigger) {
		$b_back_to_top.addClass('b-back-to-top--visible');
	} else {
		$b_back_to_top.removeClass('b-back-to-top--visible');
	}
}

jQuery(window).on('scroll', 
	function() {
		back_to_top();
	}
);

$b_back_to_top.on('click',
    function(e) {
    	e.preventDefault();
    	jQuery('html, body').animate({scrollTop: 0} , 700);
    }
);
