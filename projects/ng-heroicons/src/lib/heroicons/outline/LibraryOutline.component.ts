import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'library-outline-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 14V17M12 14V17M16 14V17M3 21H21M3 10H21M3 7L12 3L21 7M4 10H20V21H4V10Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
})
export class LibraryOutlineComponent extends BaseOutlineIconComponent { }