import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'save-as-outline-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 16v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h2m3-4H9a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1m-1 4-3 3m0 0-3-3m3 3V3" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class SaveAsOutlineIconComponent extends BaseOutlineIconComponent { }