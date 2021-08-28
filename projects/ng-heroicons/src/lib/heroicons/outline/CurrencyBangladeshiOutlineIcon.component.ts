import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'currency-bangladeshi-outline-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round"  d="M11 11V9a2 2 0 0 0-2-2m2 4v4a2 2 0 1 0 4 0v-1m-4-3H9m2 0h4m6 1a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>`,
})
export class CurrencyBangladeshiOutlineIconComponent extends BaseOutlineIconComponent { }