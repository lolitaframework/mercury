/// <reference path='../../../general/def/jquery.d.ts' />
/// <reference path='../../../general/ts/core.ts' />

namespace LolitaFramework.Layouts {
	export class Header extends LolitaFramework.Block {
		
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
		 * Constructor
		 * @param {string} blockName - name of the block
		 */
		constructor(blockName: string) {
			super(blockName);
			this.logo     = this.block.find('.b-logo.l-header__top-item');
			this.mainMenu = this.block.find('.b-main-menu.l-header__top-item');
			this.search   = this.block.find('.b-search.l-header__top-item');

			jQuery('body').on('b-main-menu__link--search::click', () => { this.openSearch() });
			jQuery('body').on('b-search__close::click', () => { this.closeSearch() });
		}

		/**
		 * Open Search panel
		 */
		public openSearch() {
			this.logo.hide();
			this.mainMenu.hide();
			this.search.show();
		}

		/**
		 * Close Search panel
		 */
		public closeSearch() {
			this.logo.show();
			this.mainMenu.show();
			this.search.hide();
		}
	}

	export let header = new Header('.l-header');
}