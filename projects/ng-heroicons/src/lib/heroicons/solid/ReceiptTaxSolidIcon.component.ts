import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'receipt-tax-solid-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5 2a2 2 0 0 0-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 0 0-2-2H5zm2.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm6.207.293a1 1 0 0 0-1.414 0l-6 6a1 1 0 1 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414zM12.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" clip-rule="evenodd"/></svg>`,
})
export class ReceiptTaxSolidIconComponent extends BaseSolidIconComponent { }