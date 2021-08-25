import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'chevron-double-left-outline-icon',
  template: `<svg [style]="style" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m11 19-7-7 7-7m8 14-7-7 7-7"/></svg>`,
})
export class ChevronDoubleLeftOutlineIconComponent extends BaseOutlineIconComponent { }