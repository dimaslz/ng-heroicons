import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'dots-horizontal-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM12 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM16 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor"/></svg>`,
})
export class DotsHorizontalSolidIconComponent extends BaseSolidIconComponent { }