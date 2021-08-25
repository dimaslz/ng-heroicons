import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'hand-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 3a1 1 0 0 1 2 0v5.5a.5.5 0 0 0 1 0V4a1 1 0 1 1 2 0v4.5a.5.5 0 0 0 1 0V6a1 1 0 1 1 2 0v5a7 7 0 1 1-14 0V9a1 1 0 0 1 2 0v2.5a.5.5 0 0 0 1 0V4a1 1 0 0 1 2 0v4.5a.5.5 0 0 0 1 0V3z" fill="currentColor"/></svg>`,
})
export class HandSolidIconComponent extends BaseSolidIconComponent { }