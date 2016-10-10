$b_instagram = $('.b-instagram');
$b_instagram_frame = $b_instagram.find('.b-instagram__frame');


if ($b_instagram.hasClass('sly')) {
    if (jQuery(window).width() > 767) {
        $b_instagram_frame.sly({
            horizontal: 1,
            itemNav: 'centered',
            smart: 1,
            activateMiddle: 1,
            mouseDragging: 1,
            touchDragging: 1,
            startAt: 5,
            scrollBy: 1,
            speed: 100,
            dragHandle: 1,
            dynamicHandle: 1
        });
    }

}
