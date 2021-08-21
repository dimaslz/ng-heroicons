import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'rewind-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.445 14.832A1 1 0 0 0 10 14v-2.798l5.445 3.63A1 1 0 0 0 17 14V6a1 1 0 0 0-1.555-.832L10 8.798V6a1 1 0 0 0-1.555-.832l-6 4a1 1 0 0 0 0 1.664l6 4z" fill="currentColor"/></svg>`,
})
export class RewindSolidIconComponent extends BaseSolidIconComponent { }