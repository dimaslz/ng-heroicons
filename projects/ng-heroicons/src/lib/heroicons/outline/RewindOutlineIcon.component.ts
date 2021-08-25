import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'rewind-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.066 11.2a1 1 0 0 0 0 1.6l5.334 4A1 1 0 0 0 19 16V8a1 1 0 0 0-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 0 0 0 1.6l5.334 4A1 1 0 0 0 11 16V8a1 1 0 0 0-1.6-.8l-5.334 4z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class RewindOutlineIconComponent extends BaseOutlineIconComponent { }