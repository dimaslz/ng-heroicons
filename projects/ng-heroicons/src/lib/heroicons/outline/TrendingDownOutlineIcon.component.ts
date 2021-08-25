import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'trending-down-outline-icon',
  template: `<svg [style]="style" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 17h8m0 0V9m0 8-8-8-4 4-6-6"/></svg>`,
})
export class TrendingDownOutlineIconComponent extends BaseOutlineIconComponent { }