import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'ellipsis-vertical-solid-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" clip-rule="evenodd"/></svg>`,
})
export class EllipsisVerticalSolidIconComponent extends BaseSolidIconComponent { }