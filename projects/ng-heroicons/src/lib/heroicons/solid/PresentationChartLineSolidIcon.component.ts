import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'presentation-chart-line-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3a1 1 0 0 0 0 2v8a2 2 0 0 0 2 2h2.586l-1.293 1.293a1 1 0 1 0 1.414 1.414L10 15.414l2.293 2.293a1 1 0 0 0 1.414-1.414L12.414 15H15a2 2 0 0 0 2-2V5a1 1 0 1 0 0-2H3zm11.707 4.707a1 1 0 0 0-1.414-1.414L10 9.586 8.707 8.293a1 1 0 0 0-1.414 0l-2 2a1 1 0 1 0 1.414 1.414L8 10.414l1.293 1.293a1 1 0 0 0 1.414 0l4-4z" fill="currentColor"/></svg>`,
})
export class PresentationChartLineSolidIconComponent extends BaseSolidIconComponent { }