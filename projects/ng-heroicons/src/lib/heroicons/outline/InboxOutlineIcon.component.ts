import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'inbox-outline-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round"  d="M20 13V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7m16 0v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5m16 0h-2.586a1 1 0 0 0-.707.293l-2.414 2.414a1 1 0 0 1-.707.293h-3.172a1 1 0 0 1-.707-.293l-2.414-2.414A1 1 0 0 0 6.586 13H4"/></svg>`,
})
export class InboxOutlineIconComponent extends BaseOutlineIconComponent { }