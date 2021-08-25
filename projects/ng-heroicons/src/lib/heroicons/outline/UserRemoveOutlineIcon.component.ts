import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'user-remove-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM9 14a6 6 0 0 0-6 6v1h12v-1a6 6 0 0 0-6-6zM21 12h-6" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class UserRemoveOutlineIconComponent extends BaseOutlineIconComponent { }