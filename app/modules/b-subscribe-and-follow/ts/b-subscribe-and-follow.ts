/// <reference path='../../../general/def/jquery.d.ts' />
/// <reference path='../../../general/ts/core.ts' />

namespace LolitaFramework.Blocks {
    export class SubscribeForm extends LolitaFramework.Block {
        /**
         * Constructor
         * @param {string} blockName - name of the block
         */
        constructor(blockName: string) {
            super(blockName);

            this.block.each(
                (index, item) => {
                    let currentItem = jQuery(item);
                    let form = currentItem.find('.b-newsletter__form');
                    let emailField = currentItem.find('.b-newsletter__email');
                    form.on('submit', (event) => {
                        this.submitForm(event, emailField)
                    });
                }
            );
        }

        /**
         * On Form Submit
         * @param {BaseJQueryEventObject} event      [description]
         * @param {JQuery}                emailField [description]
         */
        private submitForm(event: BaseJQueryEventObject, emailField: JQuery) {
            if (!emailField.val()) {
                event.preventDefault();
                emailField.addClass('c-aside-field--error');
            } else {
                emailField.removeClass('c-aside-field--error');
            }
        }
    }

    export let subscribeForm = new SubscribeForm('.b-newsletter');
}
