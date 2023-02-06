import { LightningElement, api } from 'lwc';

export default class PillDropdown extends LightningElement {
  @api pill;

  pillLabel = 'Basic name';
  showDropdown = false;

  connectedCallback() {
    console.log(JSON.stringify(this.pill));
    this.pillLabel = this.pill.label;
    console.log('>>> this.pillLabel :', this.pillLabel);
  }


  removePill() {
    this.dispatchEvent(new CustomEvent('removepill', { detail: this.pill.value }));
  }

  toggleDropdown() {
    setTimeout(() => {
      this.showDropdown = !this.showDropdown;
    }, 200);
  }

  addFilterValue(event) {
    this.pillLabel = this.pillLabel == this.pill.lable ? `${this.pillLabel}: ${event.detail}` : `${this.pillLabel}, ${event.detail}`;
    console.log('clicked on ', event.detail);
  }
}