import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'currency-bangladeshi-outline-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 11V9a2 2 0 0 0-2-2m2 4v4a2 2 0 1 0 4 0v-1m-4-3H9m2 0h4m6 1a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class CurrencyBangladeshiOutlineIconComponent extends BaseOutlineIconComponent { }