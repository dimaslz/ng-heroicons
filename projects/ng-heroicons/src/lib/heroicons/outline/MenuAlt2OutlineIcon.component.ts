import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'menu-alt-2-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16M4 18h7" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class MenuAlt2OutlineIconComponent extends BaseOutlineIconComponent { }