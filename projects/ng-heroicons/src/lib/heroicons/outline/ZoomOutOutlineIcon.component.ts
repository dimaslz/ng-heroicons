import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'zoom-out-outline-icon',
  template: `<svg [style]="style" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm-4 0H7"/></svg>`,
})
export class ZoomOutOutlineIconComponent extends BaseOutlineIconComponent { }