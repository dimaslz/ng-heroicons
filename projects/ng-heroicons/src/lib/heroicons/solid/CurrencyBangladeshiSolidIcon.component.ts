import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'currency-bangladeshi-solid-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM7 4a1 1 0 0 0 0 2 1 1 0 0 1 1 1v1H7a1 1 0 0 0 0 2h1v3a3 3 0 1 0 6 0v-1a1 1 0 1 0-2 0v1a1 1 0 1 1-2 0v-3h3a1 1 0 1 0 0-2h-3V7a3 3 0 0 0-3-3z" clip-rule="evenodd"/></svg>`,
})
export class CurrencyBangladeshiSolidIconComponent extends BaseSolidIconComponent { }