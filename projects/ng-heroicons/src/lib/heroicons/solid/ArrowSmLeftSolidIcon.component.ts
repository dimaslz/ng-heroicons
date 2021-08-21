import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'arrow-sm-left-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.707 14.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L7.414 9H15a1 1 0 1 1 0 2H7.414l2.293 2.293a1 1 0 0 1 0 1.414z" fill="currentColor"/></svg>`,
})
export class ArrowSmLeftSolidIconComponent extends BaseSolidIconComponent { }