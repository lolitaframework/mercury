/// <reference path='../../../general/def/jquery.d.ts' />
/// <reference path='../../../general/ts/core.ts' />

namespace LolitaFramework.Blocks {
    export class BackToTop extends LolitaFramework.Block {

        /**
         * Scroll Trigger in Pixels
         * @type {number}
         */
        private scrollTrigger: number = 100;

        /**
         * Constructor
         * @param {string} blockName - name of the block
         */
        constructor(blockName: string, scrollTrigger?: number) {
            super(blockName);
            if (scrollTrigger) {
                this.scrollTrigger = scrollTrigger;
            }
            jQuery(window).on('scroll', () => {
                this.backToTop()
            });
            this.block.on('click', (event) => {
                this.onClick(event)
            });
        }

        /**
         * Back to top
         */
        public backToTop() {
            if (jQuery(window).scrollTop() > this.scrollTrigger) {
                this.block.setMod('visible');
            } else {
                this.block.delMod('visible');
            }
        }

        /**
         * On Click to Back to top button
         * @param {BaseJQueryEventObject} event [description]
         */
        private onClick(event: BaseJQueryEventObject) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, 700);
        }
    }

    export let backToTop = new BackToTop('.b-back-to-top');
}
