/// <reference path='../../../../general/def/jquery.d.ts' />
/// <reference path='../../../../general/ts/core.ts' />

namespace LolitaFramework.Blocks {
    export class ShareOn extends LolitaFramework.Block {
        /**
         * Constructor
         * @param {string} blockName - name of the block
         */
        constructor(blockName: string) {
            super(blockName);

            let links = this.block.find('.c-share-on__link');
            links.on('click', (event) => {
                event.preventDefault()
            });
        }
    }

    export let shareOn = new ShareOn('.c-share-on');
}
