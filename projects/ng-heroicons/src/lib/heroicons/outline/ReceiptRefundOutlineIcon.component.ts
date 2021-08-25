import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'receipt-refund-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 15v-1a4 4 0 0 0-4-4H8m0 0 3 3m-3-3 3-3m9 14V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16l4-2 4 2 4-2 4 2z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class ReceiptRefundOutlineIconComponent extends BaseOutlineIconComponent { }