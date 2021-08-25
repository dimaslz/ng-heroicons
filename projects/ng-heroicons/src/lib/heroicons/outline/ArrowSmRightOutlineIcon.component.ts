import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'arrow-sm-right-outline-icon',
  template: `<svg [style]="style" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m13 7 5 5m0 0-5 5m5-5H6"/></svg>`,
})
export class ArrowSmRightOutlineIconComponent extends BaseOutlineIconComponent { }