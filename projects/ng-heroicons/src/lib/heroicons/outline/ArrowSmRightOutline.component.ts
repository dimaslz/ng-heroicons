import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'arrow-sm-right-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 7L18 12M18 12L13 17M18 12L6 12" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
    stroke-width: inherit;
  }`],
})
export class ArrowSmRightOutlineComponent extends BaseOutlineIconComponent { }