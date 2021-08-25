import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'sort-ascending-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4h13M3 8h9m-9 4h6m4 0 4-4m0 0 4 4m-4-4v12" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class SortAscendingOutlineIconComponent extends BaseOutlineIconComponent { }