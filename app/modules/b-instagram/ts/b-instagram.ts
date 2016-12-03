/// <reference path='../../../general/def/jquery.d.ts' />
/// <reference path='../../../general/ts/core.ts' />

namespace LolitaFramework.Blocks {
    export class Instagram extends LolitaFramework.MediaBreakpoints {
        private slidersArray: Array<any> = [];

        /**
         * Constructor
         * @param {string} blockName - name of the block
         */
        constructor(blockName: string) {
            super(blockName);

            jQuery(this.block).each(
                (index, item) => {
                    let block = jQuery(item);
                    if (block.hasClass('b-instagram--sly') === true) {
                        let blockFrame: any = block.find('.b-instagram__frame');
                        let sliderArgs = {
                            horizontal: 1,
                            itemNav: 'centered',
                            smart: 1,
                            activateMiddle: 1,
                            mouseDragging: 1,
                            touchDragging: 1,
                            startAt: 5,
                            scrollBy: 1,
                            speed: 100,
                            dragHandle: 1,
                            dynamicHandle: 1
                        };
                        let sliderObject = new Sly(blockFrame, sliderArgs);
                        this.slidersArray.push(sliderObject);
                    }
                }
            );
            this.init();
        }

        /**
         * On breakpoint change
         * @param {Breakpoint} breakpoint [description]
         */
        protected onBreakpointChange(breakpoint: Breakpoint) {
            if (breakpoint.name == 'sm') {
                for (let slider of this.slidersArray) {
                    slider.destroy();
                }
            } else {
                for (let slider of this.slidersArray) {
                    slider.init();
                }
            }
        }
    }

    export let instagram = new Instagram('.b-instagram');
}
