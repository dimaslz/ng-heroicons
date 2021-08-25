import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'lightning-bolt-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class LightningBoltOutlineIconComponent extends BaseOutlineIconComponent { }