import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'receipt-refund-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 2C3.89543 2 3 2.89543 3 4V18L6.5 16L10 18L13.5 16L17 18V4C17 2.89543 16.1046 2 15 2H5ZM9.70711 5.70711C10.0976 5.31658 10.0976 4.68342 9.70711 4.29289C9.31658 3.90237 8.68342 3.90237 8.29289 4.29289L5.29289 7.29289C4.90237 7.68342 4.90237 8.31658 5.29289 8.70711L8.29289 11.7071C8.68342 12.0976 9.31658 12.0976 9.70711 11.7071C10.0976 11.3166 10.0976 10.6834 9.70711 10.2929L8.41421 9H10C11.6569 9 13 10.3431 13 12V13C13 13.5523 13.4477 14 14 14C14.5523 14 15 13.5523 15 13V12C15 9.23858 12.7614 7 10 7H8.41421L9.70711 5.70711Z" fill="currentColor"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
  }`]
})
export class ReceiptRefundSolidComponent extends BaseSolidIconComponent { }