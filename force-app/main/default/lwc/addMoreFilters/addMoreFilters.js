import { api, LightningElement, track } from 'lwc';

export default class AddMoreFilters extends LightningElement {
  filters = [
    { label: 'Actions', value: 'actions', values: [{ label: 'Action 1', value: 'action_1' }, { label: 'Action 2', value: 'action_2' }] },
    { label: 'Another', value: 'another', values: [{ label: 'Another action 1', value: 'an_action_1' }, { label: 'Another Action 2', value: 'an_action_2' }] }];

  @track renderedDropdowns = [];
  renderedDropdownsObj = {}

  addNewFilter(event) {
    if (event.detail.selected) {
      this.renderedDropdownsObj[event.detail.value] = this.filters.find(el => el.value == event.detail.value);
    } else {
      this.removePill(event);
    }
    this.renderedDropdowns = Object.values(this.renderedDropdownsObj);
  }

  removeFilter(event) {
    removePill(event);
  }

  removePill(event) {
    console.log('remove pill in parent', JSON.stringify(this.renderedDropdownsObj));
    delete this.renderedDropdownsObj[event.detail.value];
  }
}