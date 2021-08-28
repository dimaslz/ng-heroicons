import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'arrow-sm-up-solid-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 9.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L11 7.414V15a1 1 0 1 1-2 0V7.414L6.707 9.707a1 1 0 0 1-1.414 0z" clip-rule="evenodd"/></svg>`,
})
export class ArrowSmUpSolidIconComponent extends BaseSolidIconComponent { }