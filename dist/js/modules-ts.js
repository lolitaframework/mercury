var __extends=this&&this.__extends||function(o,t){function r(){this.constructor=o}for(var i in t)t.hasOwnProperty(i)&&(o[i]=t[i]);o.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},LolitaFramework;!function(o){var t;!function(t){var r=function(o){function t(t,r){var i=this;o.call(this,t),this.scrollTrigger=100,r&&(this.scrollTrigger=r),jQuery(window).on("scroll",function(){i.backToTop()}),this.block.on("click",function(o){i.onClick(o)})}return __extends(t,o),t.prototype.backToTop=function(){jQuery(window).scrollTop()>this.scrollTrigger?this.block.setMod("visible"):this.block.delMod("visible")},t.prototype.onClick=function(o){o.preventDefault(),jQuery("html, body").animate({scrollTop:0},700)},t}(o.Block);t.BackToTop=r,t.backToTop=new r(".b-back-to-top")}(t=o.Blocks||(o.Blocks={}))}(LolitaFramework||(LolitaFramework={}));
var __extends=this&&this.__extends||function(t,a){function r(){this.constructor=t}for(var n in a)a.hasOwnProperty(n)&&(t[n]=a[n]);t.prototype=null===a?Object.create(a):(r.prototype=a.prototype,new r)},LolitaFramework;!function(t){var a;!function(a){var r=function(t){function a(a){t.call(this,a),jQuery(this.block).each(function(t,a){var r=jQuery(a);if(r.hasClass("b-instagram--sly")===!0){var n=r.find(".b-instagram__frame");jQuery(window).width()>767&&n.sly({horizontal:1,itemNav:"centered",smart:1,activateMiddle:1,mouseDragging:1,touchDragging:1,startAt:5,scrollBy:1,speed:100,dragHandle:1,dynamicHandle:1})}})}return __extends(a,t),a}(t.Block);a.Instagram=r,a.instagram=new r(".b-instagram")}(a=t.Blocks||(t.Blocks={}))}(LolitaFramework||(LolitaFramework={}));
var __extends=this&&this.__extends||function(n,t){function e(){this.constructor=n}for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)},LolitaFramework;!function(n){var t;!function(t){var e=function(n){function t(t){n.call(this,t),this.block.each(function(n,t){var e=jQuery(t).find(".b-main-menu__link--search");e.on("click",function(){jQuery("body").trigger("b-main-menu__link--search::click")})})}return __extends(t,n),t}(n.Block);t.MainMenu=e,t.mainMenu=new e(".b-main-menu")}(t=n.Blocks||(n.Blocks={}))}(LolitaFramework||(LolitaFramework={}));
var __extends=this&&this.__extends||function(o,t){function c(){this.constructor=o}for(var e in t)t.hasOwnProperty(e)&&(o[e]=t[e]);o.prototype=null===t?Object.create(t):(c.prototype=t.prototype,new c)},LolitaFramework;!function(o){var t;!function(t){var c=function(o){function t(t){var c=this;o.call(this,t),this.block.each(function(o,t){var e=jQuery(t).find(".b-search__close");e.on("click",function(){c.closeClick()})})}return __extends(t,o),t.prototype.closeClick=function(){jQuery("body").trigger("b-search__close::click")},t}(o.Block);t.Search=c,t.search=new c(".b-search")}(t=o.Blocks||(o.Blocks={}))}(LolitaFramework||(LolitaFramework={}));
var __extends=this&&this.__extends||function(e,r){function i(){this.constructor=e}for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t]);e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)},LolitaFramework;!function(e){var r;!function(r){var i=function(e){function r(r){var i=this;e.call(this,r),this.block.each(function(e,r){var t=jQuery(r),o=t.find(".b-slider__items"),n=t.find(".b-slider__prev"),l=t.find(".b-slider__next"),d=o.bxSlider({mode:"fade",controls:!1,pager:!1,onSlideAfter:function(){i.onSlideAfter()},onSlideBefore:function(){i.onSlideBefore()}});if(n.on("click",function(){d.goToPrevSlide()}),l.on("click",function(){d.goToNextSlide()}),t.hasClass("b-slider--pager")){var s=jQuery('<ul class="b-slider__pager"></ul>'),a=jQuery('<li class="b-slider__pager-item"></li>');t.append(s);for(var c=0;c<d.getSlideCount();c++){var _=a.clone().text(c+1).data("slide",c);_.on("click",function(){s.find(".b-slider__pager-item").removeClass("b-slider__pager-item--current"),d.goToSlide(jQuery(this).data("slide")),jQuery(this).addClass("b-slider__pager-item--current")}),s.append(_),s.children(".b-slider__pager-item").eq(d.getCurrentSlide()).addClass("b-slider__pager-item--current")}jQuery("body").on("b_slider::slide_before",function(){s.find(".b-slider__pager-item").removeClass("b-slider__pager-item--current"),s.children(".b-slider__pager-item").eq(d.getCurrentSlide()).addClass("b-slider__pager-item--current")})}})}return __extends(r,e),r.prototype.onSlideAfter=function(){jQuery("body").trigger("b_slider::slide_after")},r.prototype.onSlideBefore=function(){jQuery("body").trigger("b_slider::slide_before")},r}(e.Block);r.Slider=i,r.slider=new i(".b-slider")}(r=e.Blocks||(e.Blocks={}))}(LolitaFramework||(LolitaFramework={}));
//# sourceMappingURL=modules-ts.js.map
