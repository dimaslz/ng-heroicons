import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'chart-pie-outline-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 3.055A9.001 9.001 0 1 0 20.945 13H11V3.055z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/><path d="M20.488 9H15V3.512A9.025 9.025 0 0 1 20.488 9z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class ChartPieOutlineIconComponent extends BaseOutlineIconComponent { }