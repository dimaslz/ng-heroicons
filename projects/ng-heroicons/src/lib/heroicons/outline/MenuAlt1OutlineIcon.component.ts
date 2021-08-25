import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'menu-alt-1-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h8m-8 6h16" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class MenuAlt1OutlineIconComponent extends BaseOutlineIconComponent { }