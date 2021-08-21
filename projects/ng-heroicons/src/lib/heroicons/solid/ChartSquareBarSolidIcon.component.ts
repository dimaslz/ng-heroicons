import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'chart-square-bar-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm9 4a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V7zm-3 2a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0V9zm-3 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1z" fill="currentColor"/></svg>`,
})
export class ChartSquareBarSolidIconComponent extends BaseSolidIconComponent { }