import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'currency-pound-solid-icon',
  template: `<svg [style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-14a3 3 0 0 0-3 3v2H7a1 1 0 0 0 0 2h1v1a1 1 0 0 1-1 1 1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 1 0 0-2h-1V7a1 1 0 1 1 2 0 1 1 0 1 0 2 0 3 3 0 0 0-3-3z" clip-rule="evenodd"/></svg>`,
})
export class CurrencyPoundSolidIconComponent extends BaseSolidIconComponent { }