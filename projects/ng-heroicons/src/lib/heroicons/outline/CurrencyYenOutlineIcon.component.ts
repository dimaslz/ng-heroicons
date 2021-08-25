import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'currency-yen-outline-icon',
  template: `<svg [style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" [attr.stroke-width]="stroke" d="m9 8 3 5m0 0 3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>`,
})
export class CurrencyYenOutlineIconComponent extends BaseOutlineIconComponent { }