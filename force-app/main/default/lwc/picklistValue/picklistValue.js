import { LightningElement, track, api } from 'lwc';

export default class PicklistValue extends LightningElement {

    @api
    selected = false;

    @api
    label;

    @api
    value;


    handleSelect(event) {
        this.selected = event.target.checked;
        this.dispatchEvent(new CustomEvent('addfilter', { detail: { value: this.value, selected: this.selected } }))
    }
}
