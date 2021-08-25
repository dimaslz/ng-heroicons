import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'arrow-circle-right-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m13 9 3 3m0 0-3 3m3-3H8m13 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class ArrowCircleRightOutlineIconComponent extends BaseOutlineIconComponent { }