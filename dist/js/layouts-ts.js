var __extends=this&&this.__extends||function(e,n){function o(){this.constructor=e}for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)},LolitaFramework;!function(e){var n;!function(n){var o=function(n){function o(e){var o=this;n.call(this,e),this.logo=this.block.find(".b-logo.l-header__top-item"),this.mainMenu=this.block.find(".b-main-menu.l-header__top-item"),this.search=this.block.find(".b-search.l-header__top-item"),this.mbSearch=this.block.find(".l-header__top__mb-search"),this.mbMenu=this.block.find(".l-header__top__mb-menu"),jQuery("body").on("b-main-menu__link--search::click",function(){o.openSearch()}),jQuery("body").on("b-search__close::click",function(){o.closeSearch()})}return __extends(o,n),o.prototype.openSearch=function(){this.logo.hide(),this.mainMenu.hide(),this.mbSearch.hide(),this.mbMenu.hide(),this.search.show()},o.prototype.closeSearch=function(){"sm"==e.MediaBreakpoints.currentDeviceType.name||"md"==e.MediaBreakpoints.currentDeviceType.name?(this.logo.show(),this.mbSearch.show(),this.mbMenu.show(),this.search.hide()):(this.logo.show(),this.mainMenu.show(),this.mbSearch.show(),this.mbMenu.show(),this.search.hide())},o.prototype.onBreakpointChange=function(n){"sm"==n.name||"md"==n.name?this.block.each(function(n,o){var t=jQuery(o).find(".l-header__top");if(!t.find(".l-header__top__mb-search").length){var i=jQuery('<span class="l-header__top__mb-search">Search</span>');i.on("click",function(){e.Blocks.mainMenu.searchClick()}),t.append(i)}if(!t.find(".l-header__top__mb-menu").length){var h=jQuery('<span class="l-header__top__mb-menu">Menu</span>');h.on("click",function(){e.Blocks.mainMenu.menuClick()}),t.append(h)}}):this.block.each(function(e,n){var o=jQuery(n);o.find(".l-header__top__mb-search").remove(),o.find(".l-header__top__mb-menu").remove()})},o}(e.MediaBreakpoints);n.Header=o,n.header=new o(".l-header")}(n=e.Layouts||(e.Layouts={}))}(LolitaFramework||(LolitaFramework={}));
//# sourceMappingURL=layouts-ts.js.map
