import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'dots-circle-horizontal-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" fill="currentColor"/></svg>`,
})
export class DotsCircleHorizontalSolidIconComponent extends BaseSolidIconComponent { }