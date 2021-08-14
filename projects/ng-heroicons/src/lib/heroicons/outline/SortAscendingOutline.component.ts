import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'sort-ascending-outline-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 4H16M3 8H12M3 12H9M13 12L17 8M17 8L21 12M17 8V20" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
})
export class SortAscendingOutlineComponent extends BaseOutlineIconComponent { }