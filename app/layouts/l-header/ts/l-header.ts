/// <reference path='../../../general/def/jquery.d.ts' />
/// <reference path='../../../general/ts/core.ts' />

namespace LolitaFramework.Layouts {
	export class Header extends LolitaFramework.MediaBreakpoints {
		
		/**
		 * Logo object
		 * @type {JQuery}
		 */
		private logo: JQuery;

		/**
		 * Main menu object
		 * @type {JQuery}
		 */
		private mainMenu: JQuery;
		
		/**
		 * Search panel object
		 * @type {JQuery}
		 */
		private search: JQuery;

		/**
		 * Search panel object
		 * @type {JQuery}
		 */
		
		private mbSearch: JQuery;
		/**
		 * Search panel object
		 * @type {JQuery}
		 */
		private mbMenu: JQuery;

		/**
		 * Constructor
		 * @param {string} blockName - name of the block
		 */
		constructor(blockName: string) {
			super(blockName);
			this.logo     = this.block.find('.b-logo.l-header__top-item');
			this.mainMenu = this.block.find('.b-main-menu.l-header__top-item');
			this.search   = this.block.find('.b-search.l-header__top-item');
			this.mbSearch   = this.block.find('.l-header__top__mb-search');
			this.mbMenu   = this.block.find('.l-header__top__mb-menu');

			jQuery('body').on('b-main-menu__link--search::click', () => { this.openSearch() });
			jQuery('body').on('b-search__close::click', () => { this.closeSearch() });
		}

		/**
		 * Open Search panel
		 */
		public openSearch() {
			this.logo.hide();
			this.mainMenu.hide();
			this.mbSearch.hide();
			this.mbMenu.hide();
			this.search.show();
		}

		/**
		 * Close Search panel
		 */
		public closeSearch() {
			if (LolitaFramework.MediaBreakpoints.currentDeviceType.name == 'sm' ||
				LolitaFramework.MediaBreakpoints.currentDeviceType.name == 'md') {
				this.logo.show();
				this.mbSearch.show();
				this.mbMenu.show();
				this.search.hide();
			} else {
				this.logo.show();
				this.mainMenu.show();
				this.mbSearch.hide();
				this.mbMenu.hide();
				this.search.hide();
			}
		}

        /**
         * Add buttons for mobiles and tablets
         * @param {Breakpoint} breakpoint [description]
         */
        protected onBreakpointChange(breakpoint: Breakpoint) {
            if (breakpoint.name == 'sm' || breakpoint.name == 'md') {
                this.block.each(
                    (index, item) => {
                        let curentItem = jQuery(item).find('.l-header__top');

                        if (!curentItem.find('.l-header__top__mb-search').length) {
                            let searchButton = jQuery('<span class="l-header__top__mb-search">Search</span>');
                            searchButton.on('click', () => { LolitaFramework.Blocks.mainMenu.searchClick() });
                            curentItem.append(searchButton);
                        }
                        
                        
                        if (!curentItem.find('.l-header__top__mb-menu').length) {
                            let menuButton = jQuery('<span class="l-header__top__mb-menu">Menu</span>');
                            menuButton.on('click', () => { LolitaFramework.Blocks.mainMenu.menuClick() });
                            curentItem.append(menuButton);
                        }
                        
                    }
                );
            } else {
                this.block.each(
                    (index, item) => {
                        let curentItem = jQuery(item);
                        curentItem.find('.l-header__top__mb-search').remove();
                        curentItem.find('.l-header__top__mb-menu').remove();
                    }
                );
            }
        }
	}

	export let header = new Header('.l-header');
}