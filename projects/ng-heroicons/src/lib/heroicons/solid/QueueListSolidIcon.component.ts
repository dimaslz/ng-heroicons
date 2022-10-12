import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'queue-list-solid-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625zm-1.875 7.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75zM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75zm.75 3a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75z"/></svg>`,
})
export class QueueListSolidIconComponent extends BaseSolidIconComponent { }