$b_back_to_top=jQuery(".b-back-to-top"),scrollTrigger=100,back_to_top=function(){jQuery(window).scrollTop()>scrollTrigger?$b_back_to_top.addClass("b-back-to-top--visible"):$b_back_to_top.removeClass("b-back-to-top--visible")},jQuery(window).on("scroll",function(){back_to_top()}),$b_back_to_top.on("click",function(o){o.preventDefault(),jQuery("html, body").animate({scrollTop:0},700)});
$b_instagrams=$(".b-instagram"),jQuery($b_instagrams).each(function(){$b_instagram=$(this),$b_instagram_frame=$b_instagram.find(".b-instagram__frame"),$b_instagram.hasClass("b-instagram--sly")&&jQuery(window).width()>767&&$b_instagram_frame.sly({horizontal:1,itemNav:"centered",smart:1,activateMiddle:1,mouseDragging:1,touchDragging:1,startAt:5,scrollBy:1,speed:100,dragHandle:1,dynamicHandle:1})});
$b_main_menu__link__search=jQuery(".b-main-menu__link--search"),$b_main_menu__link__search.on("click",function(){console.log("b-main-menu__link--search::click"),jQuery("body").trigger("b-main-menu__link--search::click")});
$b_search__close=jQuery(".b-search__close"),$b_search__close.on("click",function(){console.log("b-search__close::click"),jQuery("body").trigger("b-search__close::click")});
var $b_sliders=jQuery(".b-slider");$b_sliders.each(function(e,r){var i=jQuery(r),_=i.find(".b-slider__items"),d=i.find(".b-slider__prev"),l=i.find(".b-slider__next"),s=_.bxSlider({mode:"fade",controls:!1,pager:!1,onSlideAfter:function(){jQuery("body").trigger("b_slider::slide_after")},onSlideBefore:function(){jQuery("body").trigger("b_slider::slide_before")}});if(d.on("click",function(){s.goToPrevSlide()}),l.on("click",function(){s.goToNextSlide()}),i.hasClass("b-slider--pager")){$b_slider__pager=jQuery('<ul class="b-slider__pager"></ul>'),$b_slider__pager_item=jQuery('<li class="b-slider__pager-item"></li>'),i.append($b_slider__pager);for(var t=0;t<s.getSlideCount();t++)$current_item=$b_slider__pager_item.clone().text(t+1).data("slide",t),$current_item.on("click",function(){$b_slider__pager.find(".b-slider__pager-item").removeClass("b-slider__pager-item--current"),s.goToSlide(jQuery(this).data("slide")),$(this).addClass("b-slider__pager-item--current")}),$b_slider__pager.append($current_item),$b_slider__pager.children(".b-slider__pager-item").eq(s.getCurrentSlide()).addClass("b-slider__pager-item--current");jQuery("body").on("b_slider::slide_before",function(){$b_slider__pager.find(".b-slider__pager-item").removeClass("b-slider__pager-item--current"),$b_slider__pager.children(".b-slider__pager-item").eq(s.getCurrentSlide()).addClass("b-slider__pager-item--current")})}});

//# sourceMappingURL=modules.js.map
