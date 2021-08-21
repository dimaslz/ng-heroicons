import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'fast-forward-outline-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.933 12.8a1 1 0 0 0 0-1.6L6.6 7.2A1 1 0 0 0 5 8v8a1 1 0 0 0 1.6.8l5.333-4zM19.933 12.8a1 1 0 0 0 0-1.6l-5.333-4A1 1 0 0 0 13 8v8a1 1 0 0 0 1.6.8l5.333-4z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class FastForwardOutlineIconComponent extends BaseOutlineIconComponent { }