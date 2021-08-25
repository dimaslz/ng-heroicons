import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'code-outline-icon',
  template: `<svg [style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" [attr.stroke-width]="stroke" d="m10 20 4-16m4 4 4 4-4 4M6 16l-4-4 4-4"/></svg>`,
})
export class CodeOutlineIconComponent extends BaseOutlineIconComponent { }