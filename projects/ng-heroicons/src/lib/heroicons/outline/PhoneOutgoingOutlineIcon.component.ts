import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'phone-outgoing-outline-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round"  d="M16 3h5m0 0v5m0-5-6 6M5 3a2 2 0 0 0-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 0 0 2-2v-3.28a1 1 0 0 0-.684-.948l-4.493-1.498a1 1 0 0 0-1.21.502l-1.13 2.257a11.042 11.042 0 0 1-5.516-5.517l2.257-1.128a1 1 0 0 0 .502-1.21L9.228 3.683A1 1 0 0 0 8.279 3H5z"/></svg>`,
})
export class PhoneOutgoingOutlineIconComponent extends BaseOutlineIconComponent { }