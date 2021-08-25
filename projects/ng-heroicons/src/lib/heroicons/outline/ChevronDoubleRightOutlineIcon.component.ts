import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'chevron-double-right-outline-icon',
  template: `<svg [style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" [attr.stroke-width]="stroke" d="m13 5 7 7-7 7M5 5l7 7-7 7"/></svg>`,
})
export class ChevronDoubleRightOutlineIconComponent extends BaseOutlineIconComponent { }