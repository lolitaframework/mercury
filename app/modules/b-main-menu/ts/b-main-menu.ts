/// <reference path='../../../general/def/jquery.d.ts' />
/// <reference path='../../../general/ts/core.ts' />

namespace LolitaFramework.Blocks {

    class MultilevelMenu {

        /**
         * Menu Selector
         * @type {string}
         */
        private menu_selector: any = null;

        /**
         * Menu Object
         * @type {object}
         */
        private $menu: any = null;

        /**
         * Menu Item Selector
         * @type {string}
         */
        private menu_item_selector: string = 'li';

        /**
         * Sub Menu Selector
         * @type {string}
         */
        private sub_menu_selector: string;

        /**
         * Current menu
         * @type {object}
         */
        private $current_menu: any = null;

        /**
         * Disabled plugin
         * @type {boolean}
         */
        private disabled: boolean = false;

        /**
         * Constructor
         */
        constructor(menu_selector: string, sub_menu_selector: string) {
            if (menu_selector == null) {
                console.log('%c You should provide the menu selector', 'color: red');
                return;
            }
            if (sub_menu_selector == null) {
                console.log('%c You should provide the sub-menu selector', 'color: red');
                return;
            }

            this.menu_selector = menu_selector;
            this.$menu = jQuery(menu_selector);
            this.sub_menu_selector = sub_menu_selector;
            this.$current_menu = this.$menu;

            if (this.$menu.length != 1) {
                this.$menu = null;
                console.log('%c There should me at least one menu', 'color: red');
                console.log(menu_selector);
                return;
            }
        }

        /**
         * Get parent menu
         */
        private get_parent_menu($menu: any) {
            if ($menu.is(this.menu_selector)) {
                return false;
            }

            var $parent1 = $menu.parent();
            var $parent0 = $menu.parent().parent();

            if ($parent1.is('li') && $parent0.is('ul')) {
                if ($parent0.is(this.menu_selector)) {
                    return this.$menu;
                } else {
                    return $parent0;
                }
            } else {
                return false;
            }
        }

        /**
         * On Link Click
         */
        private click(event: any) {
            if (this.disabled) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();

            var $link = jQuery(event.currentTarget).children('a');
            var $sub_menu = jQuery(event.currentTarget).children(this.sub_menu_selector);

            if ($sub_menu.length == 0 && $link.length == 0) {
                console.log('%c There is no links or sub menus', 'color: red');
                return;
            } else if ($sub_menu.length == 1) {
                this.render_submenu($sub_menu);
            } else {
                window.location.href = $link.attr('href');
            }
        }

        /**
         * Render sub-menu
         */
        private render_submenu($sub_menu: any) {
            var $back_button: any;

            if (this.disabled) {
                return;
            }

            // add back button if required
            if (!$sub_menu.find('li').first().hasClass('c-drop-down-list__item--back-button')) {
                $back_button = jQuery('<li class="c-drop-down-list__item c-drop-down-list__item--back-button"><a class="c-drop-down-list__link">Back</a></li>');
                $sub_menu.prepend($back_button);
                var _this = this;
                $back_button.on('click', function (e: any) {
                    _this.render_back(e);
                });
            }

            // set container size
            this.$menu.height($sub_menu.outerHeight());
            $sub_menu.width(this.$menu.outerWidth());

            // set z-index
            var new_z_index: string = <string>$sub_menu.css('z-index');

            if (new_z_index == 'auto') {
                new_z_index = '1';
            } else {
                new_z_index = <string>(new_z_index + 1);
            }

            // animate
            $sub_menu.css(
                {
                    'display': 'block',
                    'position': 'absolute',
                    'z-index': new_z_index,
                    'background-color': '#6DBDB8',
                    'top': '0px',
                    'left': this.$menu.outerWidth() + 'px'
                }
            );

            $sub_menu.animate({ 'left': '0px' }, 100);

            // set current menu
            this.$current_menu = $sub_menu;
        }

        /**
         * Render back
         */
        private render_back(event: any) {
            if (this.disabled) {
                return;
            }

            event.stopPropagation();

            var $parent_menu = this.get_parent_menu(this.$current_menu);

            if ($parent_menu == false) {
                return;
            }

            // set container size
            if (this.$menu = $parent_menu) {
                this.$menu.height('auto');
            } else {
                this.$menu.height($parent_menu.outerHeight());
            }

            $parent_menu.width(this.$menu.outerWidth());

            // animate
            this.$current_menu.animate({ 'left': this.$menu.outerWidth() + 'px' }, 100);

            // set current menu
            this.$current_menu = $parent_menu;
        }

        /**
         * Enable plugin
         */
        public enable() {
            // set main menu container parameters
            this.$menu.css({ 'position': 'relative', 'overflow': 'hidden', 'background-color': '#6DBDB8' });

            // select and hide all sub-menus
            var $sub_menu_items = jQuery(this.sub_menu_selector).hide();

            // select all menu items
            var $menu_items = jQuery(this.$menu).find(this.menu_item_selector);
            if ($menu_items.length < 1) {
                console.log('%c There should be at least one menu item', 'color: red');
                return;
            }

            var _this = this;
            $menu_items.on('click', function (e: any) {
                _this.click(e);
            });

            jQuery('.c-drop-down-list__item--back-button').show();

            this.disabled = false;
        }

        /**
         * Disable plugin
         */
        public disable() {
            this.$menu.attr('style', '');
            this.$current_menu.attr('style', '');
            jQuery(this.$menu).find(this.menu_item_selector).attr('style', '');
            jQuery(this.sub_menu_selector).attr('style', '');
            jQuery('.c-drop-down-list__item--back-button').hide();
            this.disabled = true;
        }
    }

    export let multilevelMenu = new MultilevelMenu('.b-main-menu--multilevel', 
                                                   '.c-drop-down-list');

    export class MainMenu extends LolitaFramework.MediaBreakpoints {
        /**
         * Constructor
         * @param {string} blockName - name of the block
         */
        constructor(blockName: string) {
            super(blockName);

            this.block.each(
            	(index, item) => {
            		let searchLink: JQuery = jQuery(item).find('.b-main-menu__link--search');
            		searchLink.on('click', () => {this.searchClick(); } );
            	}
        	);
        }

        /**
         * Add buttons for mobiles and tablets
         * @param {Breakpoint} breakpoint [description]
         */
        protected onBreakpointChange(breakpoint: Breakpoint) {
            if (breakpoint.name == 'sm' || breakpoint.name == 'md') {
                multilevelMenu.enable();
            } else {
                multilevelMenu.disable();
            }
        }

        /**
         * Search button Click
         */
        public searchClick() {
            jQuery('body').trigger('b-main-menu__link--search::click');
        }

        /**
         * Menu Click
         */
        public menuClick() {
            

        }
    }

    export let mainMenu = new MainMenu('.b-main-menu');
}
