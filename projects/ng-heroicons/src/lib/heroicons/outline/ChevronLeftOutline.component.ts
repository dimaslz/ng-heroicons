import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'chevron-left-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19L8 12L15 5" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
    stroke-width: inherit;
  }`],
})
export class ChevronLeftOutlineComponent extends BaseOutlineIconComponent { }