import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'code-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m10 20 4-16m4 4 4 4-4 4M6 16l-4-4 4-4" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class CodeOutlineIconComponent extends BaseOutlineIconComponent { }