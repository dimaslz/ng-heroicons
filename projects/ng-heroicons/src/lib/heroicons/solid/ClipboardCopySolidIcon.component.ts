import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'clipboard-copy-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2H8z" fill="currentColor"/><path d="M3 5a2 2 0 0 1 2-2 3 3 0 0 0 3 3h2a3 3 0 0 0 3-3 2 2 0 0 1 2 2v6h-4.586l1.293-1.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L10.414 13H15v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zM15 11h2a1 1 0 1 1 0 2h-2v-2z" fill="currentColor"/></svg>`,
})
export class ClipboardCopySolidIconComponent extends BaseSolidIconComponent { }