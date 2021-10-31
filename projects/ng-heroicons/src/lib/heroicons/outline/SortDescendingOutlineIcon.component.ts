import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'sort-descending-outline-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round"  d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0-4-4m4 4 4-4"/></svg>`,
})
export class SortDescendingOutlineIconComponent extends BaseOutlineIconComponent { }