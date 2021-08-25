import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'chevron-up-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5 15 7-7 7 7" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class ChevronUpOutlineIconComponent extends BaseOutlineIconComponent { }