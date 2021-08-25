import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'paper-airplane-outline-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" [attr.stroke-width]="stroke" d="m12 19 9 2-9-18-9 18 9-2zm0 0v-8"/></svg>`,
})
export class PaperAirplaneOutlineIconComponent extends BaseOutlineIconComponent { }