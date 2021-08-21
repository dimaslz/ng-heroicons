import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'x-outline-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 18 18 6M6 6l12 12" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class XOutlineIconComponent extends BaseOutlineIconComponent { }