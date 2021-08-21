import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'folder-download-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 0 1 2-2h5l2 2h5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z" fill="currentColor"/><path d="M10 9v4m0 0-2-2m2 2 2-2" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class FolderDownloadSolidIconComponent extends BaseSolidIconComponent { }