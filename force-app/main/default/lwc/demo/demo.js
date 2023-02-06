import { LightningElement, track, api } from 'lwc';

export default class Demo extends LightningElement {
    @api filter = {};


    //To get the picklist values in container component
    fetchSelectedValues() {
        let selections = this.template.querySelector('c-mutli-select-picklist');
        console.log(selections.values);
    }

}