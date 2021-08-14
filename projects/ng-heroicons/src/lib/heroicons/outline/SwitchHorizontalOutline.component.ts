import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'switch-horizontal-outline-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 7L20 7M20 7L16 3M20 7L16 11M16 17L4 17M4 17L8 21M4 17L8 13" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
})
export class SwitchHorizontalOutlineComponent extends BaseOutlineIconComponent { }