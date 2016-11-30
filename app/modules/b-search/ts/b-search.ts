/// <reference path='../../../general/def/jquery.d.ts' />
/// <reference path='../../../general/ts/core.ts' />

namespace LolitaFramework.Blocks {
    export class Search extends LolitaFramework.Block {
        
        /**
         * Current Item
         * @type {JQuery}
         */
        public currentItem: JQuery;
        
        /**
         * Constructor
         * @param {string} blockName - name of the block
         */
        constructor(blockName: string) {
            super(blockName);

            this.block.each(
                (index, item) => {
                    let block = jQuery(item);
                    let closeButton = block.find('.b-search__close');
                    closeButton.on('click', () => { this.closeClick(); });

                    // active/nonactive search-block for keypresses
                    block.on('mouseenter', 
                        () => {
                             block.addClass('b-search--active');
                        }
                    );

                    jQuery(document).on('mouseup',
                        (event) => {
                            if (!block.is(event.target) 
                                && block.has(event.target).length === 0) {
                                block.removeClass('b-search--active');
                            }
                        }
                    );

                    // keypresses
                    jQuery(document).keydown(
                        (event) => {
                            if (block.hasClass('b-search--active')) {
                                switch (event.which) {
                                    case 38: // up
                                        event.preventDefault();
                                        this.prevItem(block);
                                        break;

                                    case 40: // down
                                        event.preventDefault();
                                        this.nextItem(block);
                                        break;

                                    default:
                                        return;
                                }
                            }
                        }
                    );

                    // mouse hover
                    let itemsContainer = block.find('.b-search__results');
                    itemsContainer.on('mouseenter', '.b-search__item',
                        (event) => {
                            let items = itemsContainer.find('.b-search__item');
                            let currentItem = jQuery(event.currentTarget);
                            items.removeClass('c-search-item--active');
                            currentItem.addClass('c-search-item--active');
                        }
                    );

                }
            );
        }

        /**
         * Close click
         */
        public closeClick() {
        	jQuery('body').trigger('b-search__close::click');
        }

        /**
         * Set prev Item
         * @param {JQuery} block current block
         */
        public prevItem(block: JQuery) {
            let items = block.find('.b-search__item');
            let prevItem = items.filter('.c-search-item--active').prev();

            items.removeClass('c-search-item--active');
            if (!prevItem.length) {
                prevItem = items.last();
            }
            prevItem.addClass('c-search-item--active');
        }

        /**
         * Set next Item
         * @param {JQuery} block current block
         */
        public nextItem(block: JQuery) {
            let items = block.find('.b-search__item');
            let prevItem = items.filter('.c-search-item--active').next();

            items.removeClass('c-search-item--active');
            if (!prevItem.length) {
                prevItem = items.first();
            }
            prevItem.addClass('c-search-item--active');
        }
    }

    export let search = new Search('.b-search');
}
