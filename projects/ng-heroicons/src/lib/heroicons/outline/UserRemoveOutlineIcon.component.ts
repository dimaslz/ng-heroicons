import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'user-remove-outline-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-4 7a6 6 0 0 0-6 6v1h12v-1a6 6 0 0 0-6-6zm12-2h-6"/></svg>`,
})
export class UserRemoveOutlineIconComponent extends BaseOutlineIconComponent { }