import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'status-offline-outline-icon',
  template: `<svg [style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" [attr.stroke-width]="stroke" d="M18.364 5.636a9 9 0 0 1 0 12.728m0 0-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 0 1 0 7.072m0 0-2.829-2.829m-4.243 2.829a4.978 4.978 0 0 1-1.414-2.83m-1.414 5.658a9 9 0 0 1-2.167-9.238m7.824 2.167a1 1 0 1 1 1.414 1.414m-1.414-1.414L3 3m8.293 8.293 1.414 1.414"/></svg>`,
})
export class StatusOfflineOutlineIconComponent extends BaseOutlineIconComponent { }