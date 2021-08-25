import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'arrow-down-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m19 14-7 7m0 0-7-7m7 7V3" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class ArrowDownOutlineIconComponent extends BaseOutlineIconComponent { }