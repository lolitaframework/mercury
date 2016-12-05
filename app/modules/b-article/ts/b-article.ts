///<reference path="../../../general/def/jquery.d.ts"/>

namespace LolitaFramework {
    export class Article extends LolitaFramework.MediaBreakpoints {
        /**
         * Constructor
         * @param blockName
         */
        constructor(blockName: string) {
            super(blockName);
            this.init();
        }

        /**
         * On breakpoint change
         * @param breakpoint
         */
        protected onBreakpointChange(breakpoint: LolitaFramework.Breakpoint): void {
            if (breakpoint.name == 'sm' || breakpoint.name == 'md') {
                this.block.each(
                    (index, item) => {
                        let currentItem = jQuery(item);
                        let shareOn = currentItem.find('.b-article__share-on');
                        currentItem.find('.b-article__content').append(shareOn);
                    }
                );
            } else {
                this.block.each(
                    (index, item) => {
                        let currentItem = jQuery(item);
                        let shareOn = currentItem.find('.b-article__share-on');
                        if (currentItem.hasClass('b-article--grid') && breakpoint.name == 'lg') {
                            currentItem.find('.b-article__content').append(shareOn);
                        } else {
                            currentItem.find('.b-article__content').prepend(shareOn);
                        }
                    }
                );
            }
        }
    }

    export let article = new Article('.b-article');

}
