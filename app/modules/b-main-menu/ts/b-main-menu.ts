/// <reference path='../../../general/def/jquery.d.ts' />
/// <reference path='../../../general/ts/core.ts' />

namespace LolitaFramework.Blocks {
    export class MainMenu extends LolitaFramework.Block {
        /**
         * Constructor
         * @param {string} blockName - name of the block
         */
        constructor(blockName: string) {
            super(blockName);

            this.block.each(
            	(index, item) => {
            		let searchLink: JQuery = jQuery(item).find('.b-main-menu__link--search');

            		searchLink.on('click', 
            			() => {
            				jQuery('body').trigger('b-main-menu__link--search::click');
            				console.log('b-main-menu__link--search::click');
            			}
        			);
            	}
        	);
        }
    }

    export let mainMenu = new MainMenu('.b-main-menu');
}
