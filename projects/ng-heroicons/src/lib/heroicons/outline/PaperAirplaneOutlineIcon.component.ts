import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'paper-airplane-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m12 19 9 2-9-18-9 18 9-2zm0 0v-8" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class PaperAirplaneOutlineIconComponent extends BaseOutlineIconComponent { }