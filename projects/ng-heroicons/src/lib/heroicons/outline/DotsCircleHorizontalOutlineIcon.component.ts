import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'dots-circle-horizontal-outline-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round"  d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>`,
})
export class DotsCircleHorizontalOutlineIconComponent extends BaseOutlineIconComponent { }