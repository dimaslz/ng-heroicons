import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'mail-open-outline-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round"  d="M3 19v-8.93a2 2 0 0 1 .89-1.664l7-4.666a2 2 0 0 1 2.22 0l7 4.666A2 2 0 0 1 21 10.07V19M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0-1.14.76a2 2 0 0 1-2.22 0l-1.14-.76"/></svg>`,
})
export class MailOpenOutlineIconComponent extends BaseOutlineIconComponent { }