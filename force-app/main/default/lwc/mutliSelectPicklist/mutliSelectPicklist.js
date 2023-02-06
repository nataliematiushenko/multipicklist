import { LightningElement, track, api } from 'lwc';

export default class MutliSelectPicklist extends LightningElement {

    @api
    values = [];
    @track listToDisplay = []
    @track originalListCopy = [];
    @track
    selectedvalues = [];

    @api
    picklistlabel = 'Status';

    showdropdown;


    connectedCallback() {
        this.values.forEach(element => element.selected
            ? this.selectedvalues.push(element.value) : '');
        console.log(this.selectedvalues);
        this.originalListCopy = this.values;
        this.listToDisplay = this.values;
        console.log('connected callback run');
    }

    fetchSelectedValues() {

        this.selectedvalues = [];

        //get all the selected values
        this.template.querySelectorAll('c-picklist-value').forEach(
            element => {
                if (element.selected) {
                    console.log(element.value);
                    this.selectedvalues.push(element.value);
                }
                this.dispatchEvent(new CustomEvent('addfilter', { detail: { value: element.value, selected: element.selected } }))
            }
        );

        //refresh original list
        this.refreshOrginalList();
    }

    refreshOrginalList() {
        //update the original value array to shown after close

        const picklistvalues = this.values.map(eachvalue => ({ ...eachvalue }));

        picklistvalues.forEach((element, index) => {
            if (this.selectedvalues.includes(element.value)) {
                picklistvalues[index].selected = true;
            } else {
                picklistvalues[index].selected = false;
            }
        });

        this.values = picklistvalues;
    }

    handleShowdropdown() {
        if (this.showdropdown) {
            // this.showdropdown = false;
            this.fetchSelectedValues();
        } else {
            this.showdropdown = true;
        }
    }

    closePill(event) {
        console.log(event.target.dataset.value);
        let selection = event.target.dataset.value;
        let selectedpills = this.selectedvalues;
        console.log(selectedpills);
        let pillIndex = selectedpills.indexOf(selection);
        console.log(pillIndex);
        this.selectedvalues.splice(pillIndex, 1);
        this.refreshOrginalList();
    }


    addFilter(event) {
        if (event.detail.selected) {
            this.dispatchEvent(new CustomEvent('addfilter', { detail: event.detail }))
        } else {

            this.dispatchEvent(new CustomEvent('removefilter', { detail: event.detail }))
        }
        this.handleShowdropdown();
    }


    searchFreeText(event) {
        if (event.target.value) {
            this.listToDisplay = this.originalListCopy.filter((el) => el.label.toLowerCase().includes(event.target.value.toLowerCase()));
            console.log(this.listToDisplay.length);
        } else {
            this.listToDisplay = this.originalListCopy;
        }
    }
}
