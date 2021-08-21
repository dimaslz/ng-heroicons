import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'chart-pie-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 0 1 8-8v8h8a8 8 0 1 1-16 0z" fill="currentColor"/><path d="M12 2.252A8.014 8.014 0 0 1 17.748 8H12V2.252z" fill="currentColor"/></svg>`,
})
export class ChartPieSolidIconComponent extends BaseSolidIconComponent { }