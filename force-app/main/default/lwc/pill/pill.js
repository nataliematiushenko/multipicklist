import { LightningElement, api } from 'lwc';

export default class Pill extends LightningElement {
  @api selectedvalues = [];
  @api label;

  connectedCallback() {
    console.log('pill.js: ', this.label);
  }

  closePill(event) {
    event.preventDefault();
    this.dispatchCustomEvent('removepill');
  }

  toggleDropdown(event) {
    event.preventDefault();
    this.dispatchCustomEvent('showoptions');
    console.log('>>> showoptions dispatched');
  }

  dispatchCustomEvent(name, detail) {
    this.dispatchEvent(new CustomEvent(name, { detail }));
  }
}