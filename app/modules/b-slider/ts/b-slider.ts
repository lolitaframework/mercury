/// <reference path='../../../general/def/jquery.d.ts' />
/// <reference path='../../../general/ts/core.ts' />

namespace LolitaFramework.Blocks {
    export class Slider extends LolitaFramework.Block {
        /**
         * Constructor
         * @param {string} blockName - name of the block
         */
        constructor(blockName: string) {
            super(blockName);

            this.block.each(
            	(index, item) => {
            		let slider      = jQuery(item);
        		    let items: any  = slider.find('.b-slider__items');
				    let prev        = slider.find('.b-slider__prev');
				    let next        = slider.find('.b-slider__next');

				    let bxSlider = items.bxSlider({
					        mode: 'fade',
					        controls: false,
					        pager: false,
					        onSlideAfter: () => { this.onSlideAfter() },
					        onSlideBefore: () => { this.onSlideBefore() }
					    }
    				);

				    prev.on('click', () => { bxSlider.goToPrevSlide(); });
				    next.on('click', () => { bxSlider.goToNextSlide(); });

				    // add pager
				    if (slider.hasClass('b-slider--pager')) {
				        let pager = jQuery('<ul class="b-slider__pager"></ul>');
				        let pagerItems = jQuery('<li class="b-slider__pager-item"></li>');
				        slider.append(pager);

				        for (var i = 0; i < bxSlider.getSlideCount(); i++) {
				            let currentItem = pagerItems.clone().text(i + 1).data('slide', i);
				            currentItem.on('click', function() {
				                pager.find('.b-slider__pager-item').removeClass('b-slider__pager-item--current')
				                bxSlider.goToSlide(jQuery(this).data('slide'));
				                jQuery(this).addClass('b-slider__pager-item--current');
				            })
				            pager.append(currentItem);
				            pager.children('.b-slider__pager-item').eq(bxSlider.getCurrentSlide()).addClass('b-slider__pager-item--current');
				        }

				        // set current slide
				        jQuery('body').on('b_slider::slide_before', function() {
				            pager.find('.b-slider__pager-item').removeClass('b-slider__pager-item--current')
				            pager.children('.b-slider__pager-item').eq(bxSlider.getCurrentSlide()).addClass('b-slider__pager-item--current');
				        })
				    }
            	}
        	);
        }

        /**
         * On Slider After
         */
        private onSlideAfter() {
        	jQuery('body').trigger('b_slider::slide_after')
        }

        /**
         * On Slider Before
         */
        private onSlideBefore() {
        	jQuery('body').trigger('b_slider::slide_before')
        }
    }

    export let slider = new Slider('.b-slider');
}
