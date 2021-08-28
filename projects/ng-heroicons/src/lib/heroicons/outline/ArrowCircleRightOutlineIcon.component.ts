import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'arrow-circle-right-outline-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round"  d="m13 9 3 3m0 0-3 3m3-3H8m13 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>`,
})
export class ArrowCircleRightOutlineIconComponent extends BaseOutlineIconComponent { }