import { LitElement, html, css } from 'lit';

export class DateChip extends LitElement {
  static get properties() {
    return {
      month: { type: String },
      day: { type: Number }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  constructor() {
    super();
    this.month = 'Jan';
    this.day = 1;
  }

  render() {
    return html`
    <span>${this.month}</span>
    <span>${this.day}</span>
    `;
  }
}

customElements.define('date-chip', DateChip);