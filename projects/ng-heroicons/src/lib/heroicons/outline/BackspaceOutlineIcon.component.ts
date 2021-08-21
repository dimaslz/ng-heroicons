import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'backspace-outline-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 2-2m0 0 2-2m-2 2-2-2m2 2 2 2M3 12l6.414 6.414a2 2 0 0 0 1.414.586H19a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-8.172a2 2 0 0 0-1.414.586L3 12z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class BackspaceOutlineIconComponent extends BaseOutlineIconComponent { }