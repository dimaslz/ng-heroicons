import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'volume-off-outline-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5.586 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/><path d="m17 14 2-2m0 0 2-2m-2 2-2-2m2 2 2 2" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class VolumeOffOutlineIconComponent extends BaseOutlineIconComponent { }