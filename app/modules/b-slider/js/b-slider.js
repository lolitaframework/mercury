$b_slider = jQuery('.b-slider');
$b_slider__items = jQuery('.b-slider').find('.b-slider__items');
$b_slider__prev = jQuery('.b-slider').find('.b-slider__prev');
$b_slider__next = jQuery('.b-slider').find('.b-slider__next');

$slider_object = $b_slider__items.bxSlider({
	mode: 'fade',
	controls: false,
	pager: false
});

$b_slider__prev.on('click', 
	function() {
		$slider_object.goToPrevSlide();
	}
);

$b_slider__next.on('click', 
	function() {
		$slider_object.goToNextSlide();
	}
);
