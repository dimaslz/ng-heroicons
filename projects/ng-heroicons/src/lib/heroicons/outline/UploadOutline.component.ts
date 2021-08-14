import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'upload-outline-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 16L4 17C4 18.6569 5.34315 20 7 20L17 20C18.6569 20 20 18.6569 20 17L20 16M16 8L12 4M12 4L8 8M12 4L12 16" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
})
export class UploadOutlineComponent extends BaseOutlineIconComponent { }