/// <reference path='../../../general/def/jquery.d.ts' />
/// <reference path='../../../general/ts/core.ts' />

namespace LolitaFramework.Blocks {
    export class Search extends LolitaFramework.Block {
        
        /**
         * Constructor
         * @param {string} blockName - name of the block
         */
        constructor(blockName: string) {
            super(blockName);

            this.block.each(
                (index, item) => {
                    let closeButton = jQuery(item).find('.b-search__close');
                    closeButton.on('click', () => { this.closeClick(); });
                }
            );
        }

        /**
         * Close click
         */
        private closeClick() {
        	jQuery('body').trigger('b-search__close::click');
        }
    }

    export let search = new Search('.b-search');
}
