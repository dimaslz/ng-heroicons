import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'arrow-circle-up-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9 11 3-3m0 0 3 3m-3-3v8m0-13a9 9 0 1 1 0 18 9 9 0 0 1 0-18z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class ArrowCircleUpOutlineIconComponent extends BaseOutlineIconComponent { }