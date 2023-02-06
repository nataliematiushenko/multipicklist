import { api, LightningElement } from 'lwc';

export default class Dropdown extends LightningElement {
  @api listToDisplay = [];

  addFilterValue(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('addfiltervalue', { detail: e.target.value }));
  }
}