import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'chevron-double-right-outline-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 4.5 7.5 7.5-7.5 7.5m-6-15 7.5 7.5-7.5 7.5"/></svg>`,
})
export class ChevronDoubleRightOutlineIconComponent extends BaseOutlineIconComponent { }