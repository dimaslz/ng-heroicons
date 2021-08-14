import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'chevron-down-outline-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9L12 16L5 9" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
})
export class ChevronDownOutlineComponent extends BaseOutlineIconComponent { }