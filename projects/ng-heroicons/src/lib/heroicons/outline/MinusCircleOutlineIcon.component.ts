import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'minus-circle-outline-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round"  d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>`,
})
export class MinusCircleOutlineIconComponent extends BaseOutlineIconComponent { }