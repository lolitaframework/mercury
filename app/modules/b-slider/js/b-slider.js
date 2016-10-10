var $b_sliders = jQuery('.b-slider');

$b_sliders.each(function(index, item) {

    var $b_slider = jQuery(item);
    var $b_slider__items = $b_slider.find('.b-slider__items');
    var $b_slider__prev = $b_slider.find('.b-slider__prev');
    var $b_slider__next = $b_slider.find('.b-slider__next');

    // init
    var $slider_object = $b_slider__items.bxSlider({
        mode: 'fade',
        controls: false,
        pager: false,
        onSlideAfter: function() {
            jQuery('body').trigger('b_slider::slide_after')
        },
        onSlideBefore: function() {
            jQuery('body').trigger('b_slider::slide_before')
        }
    });

    // add prev next events
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

    // add pager
    if ($b_slider.hasClass('b-slider--pager')) {
        $b_slider__pager = jQuery('<ul class="b-slider__pager"></ul>');
        $b_slider__pager_item = jQuery('<li class="b-slider__pager-item"></li>');
        $b_slider.append($b_slider__pager);

        for (var i = 0; i < $slider_object.getSlideCount(); i++) {
            $current_item = $b_slider__pager_item.clone().text(i + 1).data('slide', i);
            $current_item.on('click', function() {
                $b_slider__pager.find('.b-slider__pager-item').removeClass('b-slider__pager-item--current')
                $slider_object.goToSlide(jQuery(this).data('slide'));
                $(this).addClass('b-slider__pager-item--current');
            })
            $b_slider__pager.append($current_item);
            $b_slider__pager.children('.b-slider__pager-item').eq($slider_object.getCurrentSlide()).addClass('b-slider__pager-item--current');
        }

        // set current slide
        jQuery('body').on('b_slider::slide_before', function() {
            $b_slider__pager.find('.b-slider__pager-item').removeClass('b-slider__pager-item--current')
            $b_slider__pager.children('.b-slider__pager-item').eq($slider_object.getCurrentSlide()).addClass('b-slider__pager-item--current');
        })
    }

});
